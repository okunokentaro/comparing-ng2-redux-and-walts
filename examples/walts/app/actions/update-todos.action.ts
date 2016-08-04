import { Injectable } from '@angular/core';
import { Action, Next } from 'walts';

import { AppState } from "../app.store";
import { TodosRepository } from '../todos.repository';

@Injectable()
export class UpdateTodosAction extends Action<AppState> {

  constructor(private repository: TodosRepository) {
    super();
  }

  create(): Next<AppState> {
    return (state) => ({
      todos         : this.repository.filterByType(state.filter),
      completedCount: this.repository.completedCount(),
      activeCount   : this.repository.activeCount()
    });
  }

}
