import { Injectable } from '@angular/core';
import { Action, Reducer } from 'walts';

import { AppState } from '../app.store'
import { TodosRepository } from '../todos.repository'
import { UpdateTodosAction } from './update-todos.action'

@Injectable()
export class EditTodoAction extends Action<AppState> {

  constructor(private repository: TodosRepository,
              private updateTodos: UpdateTodosAction) {
    super();
  }

  create(id: number, text: string): Reducer<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.editTodo(id, text);
        return Promise.resolve(state);
      },
      this.updateTodos.create()
    );
  }

}
