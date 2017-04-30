import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'

import RootReducer from './RootReducer'

export default (client, initialState) => {
  const enhance = compose(
    applyMiddleware(client.middleware()),
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
  const store = createStore(
    RootReducer(client),
    initialState,
    enhance
  )

  if (module.hot) {
    module.hot.accept('./RootReducer', () => {
      const nextReducer = require('./RootReducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
