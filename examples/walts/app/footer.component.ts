import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterType, FILTERS } from './todos.repository';
import { SetFilterAction } from './actions/set-filter.action';
import { AppDispatcher } from './app.dispatcher';
import { ClearCompletedAction } from './actions/clear-completed.action';

@Component({
  selector: 'ex-footer',
  template: `
    <footer class="footer">
      <span class="todo-count">
        <strong>{{ activeCount || 'No' }}</strong> {{ itemWord }} left
      </span>

      <ul class="filters">
        <li *ngFor="let filter of filters">
          <a
            [class.selected]="filter === selectedFilter"
            style="cursor: pointer"
            (click)="onClickFilter(filter)"
          >{{ filter }}</a>
        </li>
      </ul>

      <button
        *ngIf="completedCount > 0"
        class="clear-completed"
        (click)="onClickClearCompleted()"
      >
        Clear completed
      </button>

    </footer>
  `,
})
export class FooterComponent {
  @Input() completedCount: number;
  @Input() activeCount: number;
  @Input() selectedFilter: string;

  private filters: FilterType[];

  constructor(private dispatcher: AppDispatcher,
              private setFilter: SetFilterAction,
              private clearCompleted: ClearCompletedAction) {
    this.filters = FILTERS;
  }

  onClickFilter(filter: FilterType) {
    this.dispatcher.emit(this.setFilter.create(filter))
  }

  onClickClearCompleted() {
    this.dispatcher.emit(this.clearCompleted.create())
  }
}
