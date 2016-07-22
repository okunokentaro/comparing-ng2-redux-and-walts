import { Injectable } from '@angular/core';
import { State, Store } from 'walts';

import { AppDispatcher } from './app.dispatcher';
import { Todo } from "./todo";
import { FilterType } from "./todos.repository";

export class AppState extends State {
  todos         : Todo[];
  filter        : FilterType;
  completedCount: number;
  activeCount   : number;
}

const INIT_STATE: AppState = {
  todos         : [],
  filter        : 'showAll',
  completedCount: null,
  activeCount   : null
};

@Injectable()
export class AppStore extends Store<AppState> {

  constructor(protected dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }

}
