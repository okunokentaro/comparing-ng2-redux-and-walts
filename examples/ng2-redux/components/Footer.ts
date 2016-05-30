import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilters';

const FILTER_TITLES = {
  [SHOW_ALL]      : 'All',
  [SHOW_ACTIVE]   : 'Active',
  [SHOW_COMPLETED]: 'Completed'
} as {[key: string]: string};

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
            (click)="handleShow(filter)"
          >{{ title(filter) }}</a>
        </li>
      </ul>

      <button
        *ngIf="completedCount > 0"
        class="clear-completed"
        (click)="handleClearCompleted()"
      >
        Clear completed
      </button>

    </footer>
  `,
})
class Footer {
  @Input() completedCount: number;
  @Input() activeCount: number;
  @Input() selectedFilter: string;
  @Output() clearCompleted = new EventEmitter<void>();
  @Output() show = new EventEmitter<string>();

  private itemWord: string;
  private filters = [ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ];

  ngOnChanges() {
    this.itemWord = this.activeCount === 1 ? 'item' : 'items';
  }

  handleShow(filter: string) {
    this.show.emit(filter);
  }

  handleClearCompleted() {
    this.clearCompleted.emit(null);
  }

  title(filter: string): string {
    return FILTER_TITLES[filter];
  }
}

export default Footer;