import { createStore as _createStore, Store } from 'redux'
import rootReducer from '../reducers'

export default function createStore(initialState): Store<any> {
  return _createStore(rootReducer, initialState)
}