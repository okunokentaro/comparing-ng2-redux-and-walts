import { Action } from 'redux'
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'
import { AddTodoAction, DeleteTodoAction, EditTodoAction, CompleteTodoAction } from '../actions/index'
import { Todo } from "../containers/App";

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function todos(state: Todo[] = initialState, action: Action): Todo[] {
  switch (action.type) {
    case ADD_TODO:
      const addTodoAction = action as AddTodoAction
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: addTodoAction.text
        },
        ...state
      ]

    case DELETE_TODO:
      const deleteTodoAction = action as DeleteTodoAction
      return state.filter(todo =>
        todo.id !== deleteTodoAction.id
      )

    case EDIT_TODO:
      const editTodoAction = action as EditTodoAction
      return state.map(todo =>
        todo.id === editTodoAction.id ?
          Object.assign({}, todo, { text: editTodoAction.text }) :
          todo
      )

    case COMPLETE_TODO:
      const completeTodoAction = action as CompleteTodoAction
      return state.map(todo =>
        todo.id === completeTodoAction.id ?
          Object.assign({}, todo, { completed: !todo.completed }) :
          todo
      )

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}