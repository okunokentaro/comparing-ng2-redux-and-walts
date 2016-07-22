import { Component, Input } from '@angular/core';

import { SetFilterAction } from "./actions/set-filter.action";
import { CompleteAllAction } from "./actions/complete-all.action";
import { AppDispatcher } from "./app.dispatcher";
import { Todo } from "./todo";
import { FilterType } from "./todos.repository";

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
              private setFilter: SetFilterAction,
              private completeAll: CompleteAllAction) {
    // noop
  }

  ngOnInit() {
    this.dispatcher.emit(this.setFilter.create('showAll'))
  }
  
  onChangeCheckbox() {
    this.dispatcher.emit(this.completeAll.create());
  }

}
