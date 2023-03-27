import { combineReducers } from 'redux'
import products from './products'
import carts from './carts'

const rootReducer = combineReducers({
  products,
  carts,
})

export default rootReducer
