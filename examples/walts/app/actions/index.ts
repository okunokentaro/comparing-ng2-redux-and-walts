import { AddTodoAction } from './add-todo.action';
import { ClearCompletedAction } from './clear-completed.action';
import { CompleteAllAction } from './complete-all.action';
import { CompleteTodoAction } from './complete-todo.action';
import { DeleteTodoAction } from './delete-todo.action';
import { EditTodoAction } from './edit-todo.action';
import { SetFilterAction } from './set-filter.action';
import { UpdateTodosAction } from './update-todos.action';

export const ACTIONS = [
  AddTodoAction,
  ClearCompletedAction,
  CompleteAllAction,
  CompleteTodoAction,
  DeleteTodoAction,
  EditTodoAction,
  SetFilterAction,
  UpdateTodosAction
];
