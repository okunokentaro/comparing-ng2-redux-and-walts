import { Injectable } from '@angular/core';
import { Action, Reducer } from 'walts';

import { AppState } from "../app.store";
import { TodosRepository } from "../todos.repository";
import { UpdateTodosAction } from "./update-todos.action";

@Injectable()
export class CompleteAllAction extends Action<AppState> {

  constructor(private repository: TodosRepository,
              private updateTodos: UpdateTodosAction) {
    super();
  }

  create(): Reducer<AppState>[] {
    return this.combine(
      (state) => {
        const todos = state.todos.map((todo) => {
          todo.completed = true;
          return todo;
        });
        this.repository.replaceTodos(todos);
        return Promise.resolve(state);
      },
      this.updateTodos.create()
    );
  }

}
