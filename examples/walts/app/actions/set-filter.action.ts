import { Injectable } from '@angular/core';
import { Actions, Action } from 'walts';

import { AppState } from '../app.store';
import { FilterType } from '../todos.repository';
import { UpdateTodosAction } from './update-todos.action';

@Injectable()
export class SetFilterAction extends Actions<AppState> {
  constructor(private updateTodos: UpdateTodosAction) {
    super();
  }

  create(filter: FilterType): Action<AppState>[] {
    return this.combine(
      (state) => ({
        filter
      }),
      this.updateTodos.create()
    )
  }
}
