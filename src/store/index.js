import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import products from '../reducers/products'
// import carts from '../reducers/carts'
import rootReducer from '../reducers'

// const reducer = combineReducers({
//   products,
//   carts,
// })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// const store = createStore(reducer, applyMiddleware(thunk))

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

export default store
