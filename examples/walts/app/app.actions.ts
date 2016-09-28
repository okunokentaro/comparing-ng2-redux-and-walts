import { Injectable } from '@angular/core'
import { Actions, Action } from 'walts'

import { AppState } from './app.state'
import { MAP_FILTERS } from './todos.repository'

@Injectable()
export class AppActions extends Actions<AppState> {
  addTodo(text: string): Action<AppState> {
    return (state) => {
      state.todos.addTodo(text)
      return state
    }
  }

  clearCompletedAction(): Action<AppState> {
    return (state) => {
      state.todos.clearCompleted()
      return state
    }
  }

  completeAll(): Action<AppState> {
    return (state) => {
      state.todos.completeAll()
      return state
    }
  }

  completeTodo(id: number): Action<AppState> {
    return (state) => {
      state.todos.completeTodo(id)
      return state
    }
  }

  clearCompleted(): Action<AppState> {
    return (state) => {
      state.todos.clearCompleted()
      return state
    }
  }

  deleteTodo(id: number): Action<AppState> {
    return (state) => {
      state.todos.deleteTodo(id)
      return state
    }
  }

  editTodo(id: number, text: string): Action<AppState> {
    return (state) => {
      state.todos.editTodo(id, text)
      return state
    }
  }

  setFilter(filter: string): Action<AppState> {
    return (state) => ({
      filter: MAP_FILTERS[filter]
    })
  }
}
