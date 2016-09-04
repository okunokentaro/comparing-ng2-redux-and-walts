import { Injectable } from '@angular/core';
import { Actions, Action } from 'walts';

import { AppState } from './app.store';
import { TodosRepository, FilterType } from './todos.repository';

@Injectable()
export class AppActions extends Actions<AppState> {
  constructor(private repository: TodosRepository) {
    super();
  }

  addTodo(text: string): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.addTodo(text);
        return state;
      },
      this.updateTodos()
    );
  }

  clearCompletedAction(): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.clearCompleted();
        return state;
      },
      this.updateTodos()
    );
  }

  completeAll(): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.completeAll();
        return state;
      },
      this.updateTodos()
    );
  }

  completeTodo(id: number): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.completeTodo(id);
        return state;
      },
      this.updateTodos()
    );
  }

  clearCompleted() {
    return this.combine(
      (state) => {
        return state;
      },
      this.updateTodos()
    );
  }

  deleteTodo(id: number): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.deleteTodo(id);
        return state;
      },
      this.updateTodos()
    );
  }

  editTodo(id: number, text: string): Action<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.editTodo(id, text);
        return state;
      },
      this.updateTodos()
    );
  }

  setFilter(filter: FilterType): Action<AppState>[] {
    return this.combine(
      (state) => ({
        filter
      }),
      this.updateTodos()
    )
  }

  updateTodos(): Action<AppState> {
    return (state) => ({
      todos         : this.repository.filterByType(state.filter),
      completedCount: this.repository.completedCount(),
      activeCount   : this.repository.activeCount()
    });
  }
}
