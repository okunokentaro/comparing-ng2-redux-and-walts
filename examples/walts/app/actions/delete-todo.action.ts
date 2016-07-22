import { Injectable } from '@angular/core';
import { Action, Reducer } from 'walts';

import { AppState } from "../app.store";

@Injectable()
export class DeleteTodoAction extends Action<AppState> {
  
  create(id: number): Reducer<AppState> {
    return (state) => {
      return Promise.resolve(state);
    };
  }

}
