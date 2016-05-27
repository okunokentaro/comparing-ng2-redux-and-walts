import { Component, Input } from '@angular/core'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

@Component({
  selector: 'ex-header',
  template: `
    <section class="main">
      <input
        *ngIf="todos.length > 0"
        class="toggle-all"
        type="checkbox"
        [attr.checked]="completedCount === todos.length"
        (change)="actions.completeAll"
      >
      <ul
        class="todo-list"
        *ngFor="let todo of filteredTodos"
      >
        <ex-todo-item [key]="todo.id" [todo]="todo" [actions]="actions"></ex-todo-item>
      </ul>
      
      <ex-footer
        [completedCount]="completedCount"
        [activeCount]="activeCount"
        [filter]="filter"
        (clearCompleted)="handleClearCompleted()"
        (show)="handleShow(filter)"
      ></ex-footer>
    </section>
  `,
})
class MainSection {
  @Input() todos: any
  @Input() actions: any

  handleClearCompleted() {
    this.actions.clearCompleted()
  }

  handleShow(filter) {
    this.setState({filter})
  }
}

export default MainSection