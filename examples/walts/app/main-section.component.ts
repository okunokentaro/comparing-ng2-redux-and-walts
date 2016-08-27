import { Component, Input } from '@angular/core';

import { Todo } from "./todo";
import { FilterType } from "./todos.repository";
import { AppActions } from "./actions";
import { AppDispatcher } from "./app.dispatcher";

import { FooterComponent } from './footer.component';
import { TodoItemComponent } from './todo-item.component';

@Component({
  selector: 'ex-main-section',
  directives: [TodoItemComponent, FooterComponent],
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

  ngOnInit() {
    this.dispatcher.emit(this.actions.setFilter('showAll'))
  }

  onChangeCheckbox() {
    this.dispatcher.emit(this.actions.completeAll());
  }
}
