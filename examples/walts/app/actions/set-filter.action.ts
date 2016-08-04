import { Injectable } from '@angular/core';
import { Action, Next } from 'walts';

import { AppState } from '../app.store';
import { FilterType } from '../todos.repository';
import { UpdateTodosAction } from './update-todos.action';

@Injectable()
export class SetFilterAction extends Action<AppState> {
  constructor(private updateTodos: UpdateTodosAction) {
    super();
  }

  create(filter: FilterType): Next<AppState>[] {
    return this.combine(
      (state) => ({
        filter
      }),
      this.updateTodos.create()
    )
  }
}
