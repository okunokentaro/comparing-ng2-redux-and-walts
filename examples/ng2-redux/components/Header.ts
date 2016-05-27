import { Component, Input } from '@angular/core'

@Component({
  selector: 'ex-header',
  template: `
    <header class="header">
      <h1>todos</h1>
      <ex-todo-text-input
        [newTodo]="true"
        (save)="handleSave($event)"
        [placeholder]="What needs to be done?"
      ></ex-todo-text-input>
    </header>
  `,
})
class Header {
  @Input() addTodo: Function

  handleSave(text: string): void {
    if (text.length !== 0) {
      this.addTodo(text)
    }
  }
}

export default Header