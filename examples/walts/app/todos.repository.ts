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

  addTodo(text: string) {
    const id = this.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
    const todo = {
      text,
      completed: false,
      id
    };

    this.todos.push(todo);
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
    return this.todos.reduce((count, todo) => {
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
