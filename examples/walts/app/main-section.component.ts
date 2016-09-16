import { Component, Input } from '@angular/core';

import { Todo } from "./todo";
import { FilterType } from "./todos.repository";
import { AppActions } from "./app.actions";
import { AppDispatcher } from "./app.dispatcher";

@Component({
  selector: 'ex-main-section',
  template: `
    <section class="main">
      <input
        *ngIf="todos.length > 0"
        class="toggle-all"
        type="checkbox"
        [attr.checked]="completedCount === todos.length ? true : null"
        (change)="onChangeCheckbox()"
      >
      <ul
        class="todo-list"
        *ngFor="let todo of todos"
      >
        <ex-todo-item [todo]="todo"></ex-todo-item>
      </ul>

      <ex-footer
        [completedCount]="completedCount"
        [activeCount]="activeCount"
        [selectedFilter]="filter"
        (clearCompleted)="handleClearCompleted()"
        (show)="handleShow($event)"
      ></ex-footer>
    </section>
  `,
})
export class MainSectionComponent {
  @Input() todos: Todo[];
  @Input() completedCount: number;
  @Input() activeCount: number;
  @Input() filter: FilterType;

  constructor(private dispatcher: AppDispatcher,
              private actions: AppActions) {}

  onChangeCheckbox() {
    this.dispatcher.emit(this.actions.completeAll());
  }
}
