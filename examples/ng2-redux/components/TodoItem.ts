import { Component, Input } from '@angular/core';
import * as TodoActions from '../actions/index';
import { Todo } from "../containers/App";

@Component({
  selector: 'ex-todo-item',
  template: `
    <li
      [class.completed]="todo.completed"
      [class.editing]="editing"
    >
      <ex-todo-text-input
        *ngIf="editing"
        [text]="todo.text"
        [editing]="editing"
        (save)="handleSave(todo.id, $event)"
      ></ex-todo-text-input>
      <div
        *ngIf="!editing"
        class="view"
      >
        <input
          class="toggle"
          type="checkbox"
          [attr.checked]="todo.completed ? true : null"
          (change)="actions.completeTodo(todo.id)"
        >
        <label (dblclick)="handleDoubleClick()">
          {{ todo.text }}
        </label>
        <button
          class="destroy"
          (click)="actions.deleteTodo(todo.id)"
        ></button>
      </div>
    </li>
  `,
})
class TodoItem {
  @Input() todo: Todo;
  @Input() actions: TodoActions.Actions;

  private editing: boolean;

  ngOnInit() {
    this.editing = false;
  }

  handleDoubleClick() {
    this.editing = true;
  }

  handleSave(id:number, text: string) {
    if (text.length === 0) {
      this.actions.deleteTodo(id);
    } else {
      this.actions.editTodo(id, text);
    }
    this.editing = false;
  }
}

export default TodoItem;