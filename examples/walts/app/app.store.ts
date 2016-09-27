import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { State, Store } from 'walts'

import { AppDispatcher } from './app.dispatcher'
import {TodosRepository, FilterType} from './todos.repository'
import { Todo } from './todo'

export interface AppState extends State {
  todos?: TodosRepository
  filter?: FilterType
}

const INIT_STATE: AppState = {
  todos: void 0,
  filter: 'showAll'
}

@Injectable()
export class AppStore extends Store<AppState> {
  constructor(protected dispatcher: AppDispatcher,
              private todosRepository: TodosRepository) {
    super((() => {
      INIT_STATE.todos = todosRepository
      return INIT_STATE;
    })(), dispatcher)
  }

  getAllTodos(): Observable<Todo[]> {
    return this.observable.map((state) => {
      return state.todos.getAll()
    })
  }

  getFilteredTodos(): Observable<Todo[]> {
    return this.observable.map((state) => {
      const todos = state.todos.getAll()
      if (state.filter === 'showAll') {
        return todos
      }
      if (state.filter === 'showActive') {
        return todos.filter((todo) => !todo.completed)
      }
      if (state.filter === 'showCompleted') {
        return todos.filter((todo) => todo.completed)
      }
      console.error('The unknown filter type has given.')
    })
  }

  getCompletedCount(): Observable<number> {
    return this.observable.map((state) => {
      return state.todos.completedCount()
    })
  }

  getActiveCount(): Observable<number> {
    return this.observable.map((state) => {
      return state.todos.activeCount()
    })
  }

  getFilter(): Observable<FilterType> {
    return this.observable.map((state) => {
      return state.filter
    })
  }
}
