import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const middlewareEnhancer = applyMiddleware(thunk)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

export default store
