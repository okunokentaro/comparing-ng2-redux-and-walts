import { Component } from '@angular/core'
import { Unsubscribe, bindActionCreators } from 'redux'
import { NgRedux } from 'ng2-redux'
import * as TodoActions from '../actions'
import Header from "../components/Header";
import MainSection from "../components/MainSection";

export interface AppState {

}

@Component({
  selector: 'ex-app',
  directives: [ Header, MainSection ],
  template: `
    <div>
      <ex-header [addTodo]="actions.addTodo"></ex-header>
      <ex-main-section [todos]="todos" [actions]="actions"></ex-main-section>
    </div>
  `,
})
class App {
  disconnect: Unsubscribe;

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

  mapStateToProps(state) {
    return {
      todos: state.todos
    }
  }

  mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(TodoActions, dispatch)
    }
  }
}

export default App
