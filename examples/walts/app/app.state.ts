import { State } from 'walts'

import { TodosRepository, FilterType } from './todos.repository'

export interface AppState extends State {
  todos?: TodosRepository
  filter?: FilterType
}

export const INIT_STATE: AppState = {
  todos: void 0,
  filter: 'showAll'
}
