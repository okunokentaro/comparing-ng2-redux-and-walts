import { Component, Input, Output, EventEmitter } from '@angular/core'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]      : 'All',
  [SHOW_ACTIVE]   : 'Active',
  [SHOW_COMPLETED]: 'Completed'
} as {[key: string]: string}

@Component({
  selector: 'ex-footer',
  template: `
    <footer class="footer">
      <span class="todo-count">
        <strong>{{activeCount || 'No'}}</strong> {{itemWord}} left
      </span>

      <ul class="filters" *ngFor="let filter of filters">
        <li>
          <a
            [class.selected]="filter === selectedFilter"
            style="cursor: pointer"
            (click)="handleShow(filter)"
          >
            {{title(filter)}}
          </a>
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
  @Input() completedCount: number
  @Input() activeCount: number
  @Input() filter: string
  @Output() clearCompleted = new EventEmitter<void>()
  @Output() show = new EventEmitter<string>()

  private itemWord: string
  private title: (filter: string) => string
  private filters = [ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ]
  
  constructor() {}

  ngOnInit() {
    this.itemWord = this.activeCount === 1 ? 'item' : 'items'
    this.title = (filter: string) => FILTER_TITLES[filter];
  }

  handleShow(filter: string) {
    this.show.emit(filter)
  }

  handleClearCompleted() {
    this.clearCompleted.emit(null)
  }
}

export default Footer