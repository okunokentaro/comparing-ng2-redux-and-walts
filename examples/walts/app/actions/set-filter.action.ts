import { Injectable } from '@angular/core';
import { Action, Reducer } from 'walts';

import { AppState } from '../app.store';
import { FilterType } from '../todos.repository';
import { UpdateTodosAction } from "./update-todos.action";

@Injectable()
export class SetFilterAction extends Action<AppState> {

  constructor(private updateTodos: UpdateTodosAction) {
    super();
  }

  create(filter: FilterType): Reducer<AppState>[] {
    return this.combine(
      (state) => {
        const next  = {} as AppState;
        next.filter = filter;
        return Promise.resolve(this.merge(state, next));
      },
      this.updateTodos.create()
    )
  }

}
