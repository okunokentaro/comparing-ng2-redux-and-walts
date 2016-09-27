import { Component, Input } from '@angular/core'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilters'
import { Todo } from '../containers/App'
import * as TodoActions from '../actions/index'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: (todo: Todo) => !todo.completed,
  [SHOW_COMPLETED]: (todo: Todo) => todo.completed
} as { [key: string]: (value: Todo, index: number, array: Todo[]) => boolean }

@Component({
  selector: 'ex-main-section',
  template: `
    <section class="main">
      <input
        *ngIf="todos.length > 0"
        class="toggle-all"
        type="checkbox"
        [attr.checked]="completedCount === todos.length ? true : null"
        (change)="actions.completeAll()"
      >
      <ul
        class="todo-list"
        *ngFor="let todo of filteredTodos; trackBy: track"
      >
        <ex-todo-item [todo]="todo" [actions]="actions"></ex-todo-item>
      </ul>
      
      <ex-footer
        *ngIf="todos.length"
        [completedCount]="completedCount"
        [activeCount]="activeCount"
        [filter]="filter"
        (clearCompleted)="handleClearCompleted()"
        (show)="handleShow($event)"
      ></ex-footer>
    </section>
  `,
})
class MainSection {
  @Input() todos: Todo[]
  @Input() actions: TodoActions.Actions

  private filter: string
  private filteredTodos: Todo[]
  private completedCount: number
  private activeCount: number

  ngOnInit() {
    this.filter = SHOW_ALL
    this.update()
  }

  ngOnChanges() {
    this.update()
  }

  handleClearCompleted() {
    this.actions.clearCompleted()
  }

  handleShow(filter: string) {
    this.filter = filter
    this.update()
  }

  update() {
    if (this.filter) {
      this.filteredTodos = this.todos.filter(TODO_FILTERS[this.filter])
    }
    this.completedCount = this.todos.reduce((count: number, todo: Todo) => {
      return todo.completed ? count + 1 : count
    }, 0)

    this.activeCount = this.todos.length - this.completedCount
  }

  track(index: number, todo: Todo): number {
    return todo.id
  }
}

export default MainSection
