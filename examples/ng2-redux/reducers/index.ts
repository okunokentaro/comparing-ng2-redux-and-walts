import { combineReducers, Reducer } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
  todos
}) as Reducer<any>

export default rootReducer
