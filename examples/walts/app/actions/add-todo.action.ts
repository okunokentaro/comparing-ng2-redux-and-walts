import { Injectable } from '@angular/core';
import { Action, Reducer } from 'walts';

import { AppState } from "../app.store";
import { TodosRepository } from "../todos.repository";
import { UpdateTodosAction } from "./update-todos.action";

@Injectable()
export class AddTodoAction extends Action<AppState> {

  constructor(private repository: TodosRepository,
              private updateTodos: UpdateTodosAction) {
    super();
  }

  create(text: string): Reducer<AppState>[] {
    return this.combine(
      (state) => {
        this.repository.addTodo(text);
        return Promise.resolve(state);
      },
      this.updateTodos.create()
    );
  }

}
