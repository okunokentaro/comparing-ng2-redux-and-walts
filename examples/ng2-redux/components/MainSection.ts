import { Component, Input } from '@angular/core'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilters'
import { Todo } from '../containers/App'
import TodoItem from './TodoItem'
import Footer from './Footer'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: (todo: Todo) => !todo.completed,
  [SHOW_COMPLETED]: (todo: Todo) => todo.completed
} as { [key: string]: Function }

@Component({
  selector: 'ex-main-section',
  directives: [ TodoItem, Footer ],
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
  private filter: string

  private filteredTodos: Todo[]
  private completedCount: number

  ngOnInit() {
    this.filter = SHOW_ALL
  }

  ngOnChanges() {
    if (this.filter) {
      this.filteredTodos = this.todos.filter(TODO_FILTERS[this.filter])
    }
    this.completedCount = this.todos.reduce((count: number, todo: Todo) =>
      todo.completed ? count + 1 : count, 0
    )
  }

  handleClearCompleted() {
    this.actions.clearCompleted()
  }

  handleShow(filter: string) {
    this.filter = filter
  }
}

export default MainSection