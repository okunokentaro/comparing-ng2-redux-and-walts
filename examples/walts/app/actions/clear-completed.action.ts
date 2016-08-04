import { Injectable } from '@angular/core';
import { Action, Next } from 'walts';

import { AppState } from '../app.store';
import { TodosRepository } from '../todos.repository';
import { UpdateTodosAction } from './update-todos.action';

@Injectable()
export class ClearCompletedAction extends Action<AppState> {
  constructor(private repository: TodosRepository,
              private updateTodos: UpdateTodosAction) {
    super();
  }

  create(): Next<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.clearCompleted();
        return state;
      },
      this.updateTodos.create()
    );
  }
}
