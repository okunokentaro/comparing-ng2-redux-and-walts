import { Component } from '@angular/core'

import { Todo } from './todo'
import { FilterType } from './todos.repository'
import { AppActions } from './app.actions'
import { AppDispatcher } from './app.dispatcher'
import { AppStore } from './app.store';

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
        *ngFor="let todo of filteredTodos; trackBy: track"
      >
        <ex-todo-item [todo]="todo"></ex-todo-item>
      </ul>

      <ex-footer
        *ngIf="todos.length"
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
  private todos: Todo[]
  private filteredTodos: Todo[]
  private completedCount: number
  private activeCount: number
  private filter: FilterType

  constructor(private dispatcher: AppDispatcher,
              private actions: AppActions,
              private store: AppStore) {}

  ngOnInit() {
    this.store.getAllTodos()      .subscribe((v) => this.todos = v)
    this.store.getFilteredTodos() .subscribe((v) => this.filteredTodos = v)
    this.store.getActiveCount()   .subscribe((v) => this.activeCount = v)
    this.store.getCompletedCount().subscribe((v) => this.completedCount = v)
    this.store.getFilter()        .subscribe((v) => this.filter = v)
  }

  onChangeCheckbox() {
    this.dispatcher.emit(this.actions.completeAll())
  }

  track(index: number, todo: Todo): number {
    return todo.id
  }
}
