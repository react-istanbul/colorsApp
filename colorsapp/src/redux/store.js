
import { applyMiddleware, createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const middlewareEnhancer = applyMiddleware()
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

export default store

