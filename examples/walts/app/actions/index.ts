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

import { Injectable } from '@angular/core';
import { Actions, Action } from 'walts';

import { AppState } from '../app.store';
import { TodosRepository } from '../todos.repository';
import { UpdateTodosAction } from './update-todos.action';

@Injectable()
export class AppActions extends Actions<AppState> {
  constructor(private repository: TodosRepository,
              private updateTodos: UpdateTodosAction) {
    super();
  }

  AddTodo(text: string): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.addTodo(text);
        return state;
      },
      this.updateTodos.create()
    );
  }

  clearCompletedAction(): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.clearCompleted();
        return state;
      },
      this.updateTodos.create()
    );
  }

  completeAll(): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.completeAll();
        return state;
      },
      this.updateTodos.create()
    );
  }

  completeTodo(id: number): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.completeTodo(id);
        return state;
      },
      this.updateTodos.create()
    );
  }

  deleteTodo(id: number): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.deleteTodo(id);
        return state;
      },
      this.updateTodos.create()
    );
  }

  editTodo(id: number, text: string): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.editTodo(id, text);
        return state;
      },
      this.updateTodos.create()
    );
  }

  setFilter(filter: FilterType): Action<AppState>[] {
    return this.combine(
      (state) => ({
        filter
      }),
      this.updateTodos.create()
    )
  }

  updateTodos(): Action<AppState> {
    return (state) => ({
      todos         : this.repository.filterByType(state.filter),
      completedCount: this.repository.completedCount(),
      activeCount   : this.repository.activeCount()
    });
  }
}
