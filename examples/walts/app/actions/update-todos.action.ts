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
      state.todos          = this.repository.filterByType(state.filter);
      state.completedCount = this.repository.completedCount();
      state.activeCount    = this.repository.activeCount();
      return Promise.resolve(state);
    };
  }

}
