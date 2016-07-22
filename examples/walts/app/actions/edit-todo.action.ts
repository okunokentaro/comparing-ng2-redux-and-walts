import { Injectable } from '@angular/core';
import { Action, Reducer } from 'walts';

import { AppState } from "../app.store";

@Injectable()
export class EditTodoAction extends Action<AppState> {

  create(id: number, text: string): Reducer<AppState> {
    return (state) => {
      return Promise.resolve(state);
    };
  }

}
