import { Component, Input } from '@angular/core';
import { FilterType, FILTERS } from './todos.repository';
import { AppActions } from './app.actions';
import { AppDispatcher } from './app.dispatcher';

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
              private actions: AppActions) {
    this.filters = FILTERS;
  }

  onClickFilter(filter: FilterType) {
    this.dispatcher.emit(this.actions.setFilter(filter))
  }

  onClickClearCompleted() {
    this.dispatcher.emit(this.actions.clearCompleted())
  }
}
