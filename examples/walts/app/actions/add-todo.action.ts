import { Injectable } from '@angular/core';
import { Action, Next } from 'walts';

import { AppState } from '../app.store';
import { TodosRepository } from '../todos.repository';
import { UpdateTodosAction } from './update-todos.action';

@Injectable()
export class AddTodoAction extends Action<AppState> {
  constructor(private repository: TodosRepository,
              private updateTodos: UpdateTodosAction) {
    super();
  }

  create(text: string): Next<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.addTodo(text);
        return state;
      },
      this.updateTodos.create()
    );
  }
}
