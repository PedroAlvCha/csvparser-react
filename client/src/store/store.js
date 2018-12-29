import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/RootReducer.js';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export default function makeStore() {
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )
}
