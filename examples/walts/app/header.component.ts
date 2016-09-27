import { Component, Input } from '@angular/core'

import { AppDispatcher } from './app.dispatcher'
import { AppActions } from "./app.actions"

@Component({
  selector: 'ex-header',
  template: `
    <header class="header">
      <h1>todos</h1>
      <ex-todo-text-input
        [newTodo]="true"
        (save)="onSave($event)"
        [placeholder]="'What needs to be done?'"
      ></ex-todo-text-input>
    </header>
  `,
})
export class HeaderComponent {
  constructor(private dispatcher: AppDispatcher,
              private actions: AppActions) {}

  onSave(text: string) {
    this.dispatcher.emit(this.actions.addTodo(text))
  }
}
