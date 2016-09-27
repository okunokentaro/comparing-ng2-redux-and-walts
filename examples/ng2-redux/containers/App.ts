import { Component } from '@angular/core'
import { Unsubscribe, Dispatch, ActionCreatorsMapObject, bindActionCreators } from 'redux'
import { NgRedux } from 'ng2-redux'
import * as TodoActions from '../actions/index'

export interface Todo {
  text: string
  completed: boolean
  id: number
}

export interface AppState {
  todos?: Todo[]
}

@Component({
  selector: 'ex-app',
  template: `
    <div class="todoapp">
      <ex-header [addTodo]="actions.addTodo"></ex-header>
      <ex-main-section [todos]="todos" [actions]="actions"></ex-main-section>
    </div>
  `,
})
class App {
  disconnect: Unsubscribe

  constructor(private ngRedux: NgRedux<AppState>) {}

  ngOnInit() {
    this.disconnect = this.ngRedux.connect(
      this.mapStateToProps,
      this.mapDispatchToProps
    )(this)
  }

  ngOnDestroy() {
    this.disconnect()
  }

  mapStateToProps(state: AppState): AppState {
    return {
      todos: state.todos
    }
  }

  mapDispatchToProps(dispatch: Dispatch<any>): {actions: TodoActions.Actions} {
    return {
      actions: bindActionCreators(TodoActions as TodoActions.Actions, dispatch)
    }
  }
}

export default App
