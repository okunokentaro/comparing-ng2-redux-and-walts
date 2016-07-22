import { Injectable } from '@angular/core';

import { Todo } from './todo';

export type FilterType =
  'showAll' |
  'showActive' |
  'showCompleted';

@Injectable()
export class TodosRepository {

  private todos: Todo[];

  constructor() {
    this.todos = [{
      text: 'Use Angular 2 + Walts',
      completed: false,
      id: 0
    }];
  }

  filterByType(filter: FilterType): Todo[] {
    if (filter === 'showAll') {
      return this.todos;
    }
    if (filter === 'showActive') {
      return this.todos.filter((todo) => !todo.completed);
    }
    if (filter === 'showCompleted') {
      return this.todos.filter((todo) => todo.completed);
    }
    console.assert(false, 'The unknown filter type has given.');
    return;
  }

  completedCount(): number {
    return this.todos.reduce((count: number, todo: Todo) => {
      return todo.completed ? count + 1 : count;
    }, 0);
  }

  activeCount(): number {
    return this.todos.length - this.completedCount();
  }

  replaceTodos(todos: Todo[]) {
    this.todos.forEach((todo, i) => {
      todos.forEach((givenTodo) => {
        if (givenTodo.id === todo.id) {
          this.todos[i] = Object.assign(todo, givenTodo);
        }
      })
    });
  }

}
