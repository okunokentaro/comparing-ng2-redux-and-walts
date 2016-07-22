import { Component, Input } from '@angular/core';

import { TodoTextInputComponent } from './todo-text-input.component';

@Component({
  selector: 'ex-header',
  directives: [TodoTextInputComponent],
  template: `
    <header class="header">
      <h1>todos</h1>
      <ex-todo-text-input
        [newTodo]="true"
        (save)="handleSave($event)"
        [placeholder]="'What needs to be done?'"
      ></ex-todo-text-input>
    </header>
  `,
})
export class HeaderComponent {
}
