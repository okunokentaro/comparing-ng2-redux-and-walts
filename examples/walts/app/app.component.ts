import { Component } from '@angular/core';

import { ACTIONS } from './actions';
import { AppDispatcher } from './app.dispatcher';
import { AppStore, AppState } from './app.store';
import { TodosRepository } from "./todos.repository";

import { HeaderComponent } from './header.component';
import { MainSectionComponent } from './main-section.component';

@Component({
  selector: 'ex-app',
  directives: [HeaderComponent, MainSectionComponent],
  providers: [
    ACTIONS,
    TodosRepository,
    AppDispatcher,
    AppStore
  ],
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
