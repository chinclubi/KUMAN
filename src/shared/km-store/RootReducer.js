import CartReducer from '../km-modules/cart/reducer'
import { combineReducers } from 'redux'

export default client => combineReducers({
  carts: CartReducer,
  apollo: client.reducer()
})
