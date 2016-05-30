import { Action, ActionCreatorsMapObject } from 'redux';
import * as types from '../constants/ActionTypes';

export interface AddTodoAction extends Action {
  text: string;
}

export interface DeleteTodoAction extends Action {
  id: number;
}

export interface EditTodoAction extends Action {
  id: number;
  text: string;
}

export interface CompleteTodoAction extends Action {
  id: number;
}

export function addTodo(text: string): AddTodoAction {
  return { type: types.ADD_TODO, text };
}

export function deleteTodo(id: number): DeleteTodoAction {
  return { type: types.DELETE_TODO, id };
}

export function editTodo(id: number, text: string): EditTodoAction {
  return { type: types.EDIT_TODO, id, text };
}

export function completeTodo(id: number): CompleteTodoAction {
  return { type: types.COMPLETE_TODO, id };
}

export function completeAll(): Action {
  return { type: types.COMPLETE_ALL };
}

export function clearCompleted(): Action {
  return { type: types.CLEAR_COMPLETED };
}

export interface Actions extends ActionCreatorsMapObject {
  addTodo(text: string): AddTodoAction;
  deleteTodo(id: number): DeleteTodoAction;
  editTodo(id: number, text: string): EditTodoAction;
  completeTodo(id: number): CompleteTodoAction;
  completeAll(): Action;
  clearCompleted(): Action;
}