import { Injectable } from '@angular/core';
import { Action, Reducer } from 'walts';

import { AppState } from "../app.store";
import { TodosRepository } from '../todos.repository';

@Injectable()
export class UpdateTodosAction extends Action<AppState> {

  constructor(private repository: TodosRepository) {
    super();
  }

  create(): Reducer<AppState> {
    return (state) => {
      const next          = {} as AppState;
      next.todos          = this.repository.filterByType(state.filter);
      next.completedCount = this.repository.completedCount();
      next.activeCount    = this.repository.activeCount();
      return Promise.resolve(this.merge(state, next));
    };
  }

}
