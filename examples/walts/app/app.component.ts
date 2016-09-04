import { Component } from '@angular/core';

import { AppStore, AppState } from './app.store';

@Component({
  selector: 'ex-app',
  template: `
    <div class="todoapp">
      <ex-header></ex-header>
      <ex-main-section
        [todos]="state.todos"
        [activeCount]="state.activeCount"
        [completedCount]="state.completedCount"
        [filter]="state.filter"
      ></ex-main-section>
    </div>
  `,
})
export class AppComponent {
  private state: AppState;
  
  constructor(private store: AppStore) {}

  ngOnInit(): void {
    this.store.observable.subscribe((state) => {
      this.state = state;
    });
  }
}
