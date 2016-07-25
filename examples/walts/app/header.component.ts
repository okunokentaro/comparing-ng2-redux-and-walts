import { Component, Input } from '@angular/core';

import { AppDispatcher } from './app.dispatcher';
import { AddTodoAction } from "./actions/add-todo.action";
import { TodoTextInputComponent } from './todo-text-input.component';

@Component({
  selector: 'ex-header',
  directives: [TodoTextInputComponent],
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
              private addTodo: AddTodoAction) {
  }

  onSave(text: string) {
    this.dispatcher.emit(this.addTodo.create(text));
  }

}
