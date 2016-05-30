import { Component, Input } from '@angular/core'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilters'
import { Todo } from '../containers/App'
import TodoTextInput from './TodoTextInput'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: (todo: Todo) => !todo.completed,
  [SHOW_COMPLETED]: (todo: Todo) => todo.completed
}

@Component({
  selector: 'ex-todo-item',
  directives: [ TodoTextInput ],
  template: `
    <li
      [class.completed]="todo.completed"
      [class.editing]="editing"
    >
      <ex-todo-text-input
        *ngIf="editing"
        [text]="todo.text"
        [editing]="editing"
        (save)="handleSave(todo.id, text)"
      ></ex-todo-text-input>
      <div
        *ngIf="!editing"
        class="view"
      >
        <input
          class="toggle"
          type="checkbox"
          [attr.checked]="todo.completed"
          (change)="completeTodo(todo.id)"
        >
        <label (doubleClick)="handleDoubleClick()">
          {{todo.text}}
        </label>
        <button
          class="destroy"
          (click)="deleteTodo(todo.id)"
        ></button>
      </div>
    </li>
  `,
})
class TodoItem {
  @Input() todo: any
  @Input() editTodo: Function
  @Input() deleteTodo: Function
  @Input() completeTodo: Function

  private editing: boolean

  ngOnInit() {
    this.editing = false
  }

  handleDoubleClick() {
    this.editing = true
  }

  handleSave(id: number, text: string) {
    if (text.length === 0) {
      this.deleteTodo(id)
    } else {
      this.editTodo(id, text)
    }
    this.editing = false
  }
}

export default TodoItem