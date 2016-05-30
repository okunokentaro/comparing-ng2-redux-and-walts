import { Component, Input } from '@angular/core';
import TodoTextInput from './TodoTextInput';

@Component({
  selector: 'ex-header',
  directives: [ TodoTextInput ],
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
class Header {
  @Input() addTodo: Function;

  handleSave(text: string) {
    if (text.length !== 0) {
      this.addTodo(text);
    }
  }
}

export default Header;