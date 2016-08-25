import { Injectable } from '@angular/core';
import { Actions, Action } from 'walts';

import { AppState } from '../app.store';
import { TodosRepository } from '../todos.repository';

@Injectable()
export class UpdateTodosAction extends Actions<AppState> {
  constructor(private repository: TodosRepository) {
    super();
  }

  create(): Action<AppState> {
    return (state) => ({
      todos         : this.repository.filterByType(state.filter),
      completedCount: this.repository.completedCount(),
      activeCount   : this.repository.activeCount()
    });
  }
}
