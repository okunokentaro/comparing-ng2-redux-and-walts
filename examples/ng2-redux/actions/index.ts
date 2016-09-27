import { Action, ActionCreatorsMapObject } from 'redux'
import * as types from '../constants/ActionTypes'

export interface AddTodoAction extends Action {
  text: string
}

export interface DeleteTodoAction extends Action {
  id: number
}

export interface EditTodoAction extends Action {
  id: number
  text: string
}

export interface CompleteTodoAction extends Action {
  id: number
}

export const addTodo = (text: string): AddTodoAction => ({ type: types.ADD_TODO, text })
export const deleteTodo = (id: number): DeleteTodoAction => ({ type: types.DELETE_TODO, id })
export const editTodo = (id: number, text: string): EditTodoAction => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = (id: number): CompleteTodoAction => ({ type: types.COMPLETE_TODO, id })
export const completeAll = (): Action => ({ type: types.COMPLETE_ALL })
export const clearCompleted = (): Action => ({ type: types.CLEAR_COMPLETED })

export interface Actions extends ActionCreatorsMapObject {
  addTodo(text: string): AddTodoAction
  deleteTodo(id: number): DeleteTodoAction
  editTodo(id: number, text: string): EditTodoAction
  completeTodo(id: number): CompleteTodoAction
  completeAll(): Action
  clearCompleted(): Action
}
