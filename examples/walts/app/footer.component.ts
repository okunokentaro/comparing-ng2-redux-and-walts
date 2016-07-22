import { Component, Input, Output, EventEmitter } from '@angular/core';

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
export class FooterComponent {
  @Input() completedCount: number;
  @Input() activeCount: number;
  @Input() selectedFilter: string;

  title(filter: string): string {
    return 'dummy';
  }
}
