import { Action } from 'redux'
import * as types from '../constants/ActionTypes'

export function addTodo(text): Action {
  return { type: types.ADD_TODO, text }
}

export function deleteTodo(id): Action {
  return { type: types.DELETE_TODO, id }
}

export function editTodo(id, text): Action {
  return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id): Action {
  return { type: types.COMPLETE_TODO, id }
}

export function completeAll(): Action {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted(): Action {
  return { type: types.CLEAR_COMPLETED }
}