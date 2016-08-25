import { Injectable } from '@angular/core';
import { Actions, Action } from 'walts';

import { AppState } from '../app.store'
import { TodosRepository } from '../todos.repository'
import { UpdateTodosAction } from './update-todos.action'

@Injectable()
export class EditTodoAction extends Actions<AppState> {
  constructor(private repository: TodosRepository,
              private updateTodos: UpdateTodosAction) {
    super();
  }

  create(id: number, text: string): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.editTodo(id, text);
        return state;
      },
      this.updateTodos.create()
    );
  }
}
