import { Component, Input } from '@angular/core';

import { TodoTextInputComponent } from './todo-text-input.component';
import { Todo } from './todo';
import { AppDispatcher } from './app.dispatcher';
import { DeleteTodoAction } from './actions/delete-todo.action';
import { EditTodoAction } from './actions/edit-todo.action';

@Component({
  selector: 'ex-todo-item',
  directives: [TodoTextInputComponent],
  template: `
    <li>
      <ex-todo-text-input
        *ngIf="editing"
        [text]="todo.text"
        [editing]="editing"
        (save)="onSave(todo.id, $event)"
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
        <label (dblclick)="onDblclick()">
          {{todo.text}}
        </label>
        <button
          class="destroy"
          (click)="actions.deleteTodo(todo.id)"
        ></button>
      </div>
    </li>
  `,
})
export class TodoItemComponent {
  @Input() todo: Todo;

  private editing: boolean;

  constructor(private dispatcher: AppDispatcher,
              private deleteTodo: DeleteTodoAction,
              private editTodo: EditTodoAction) {}

  ngOnInit() {
    this.editing = false;
  }

  onDblclick() {
    this.editing = true;
  }

  onSave(id: number, text: string) {
    const action = text.length === 0
      ? this.deleteTodo.create(id)
      : this.editTodo.create(id, text);

    this.editing = false;
    this.dispatcher.emit(action);
  }
}
