#### 启动

yarn start

#### 打包

yarn build

#### Description

采用 `redux` 实现的简易购物车

目前有产品、购物车两个页面，已实现功能有加入购物车、清空购物车、结算购物车、购物车加减商品、购物车删除商品



#### redux

数据管理仓库

`carts.js` 

```js
const cartProducts = (cartProducts, action) => {
  const { type, id, price, max, inputValue } = action
  switch (type) {
    case 'ADD_PRODUCT':
      const curr = cartProducts.find((i) => i.id === id)
      if (curr) {
        curr.count++
      } else {
        cartProducts.push({ id, count: 1, price, max })
      }
      return [...cartProducts]
    default:
      return cartProducts
  }
}
function carts(state = { cartProducts: [] }, action) {
  return {
    cartProducts: cartProducts(state.cartProducts, action)
  }
}

export default carts

```

`products.js` 

```js
const list = (state, { type, list, id, inputValue }) => {
  switch (type) {
    case 'RECEIVE_PRODUCTS':
      return list
    default:
      return state
  }
}
function products(state = { list: [] }, action) {
  return {
    list: list(state.list, action),
  }
}
export default products
```

`reducer.js` 

```js
import { combineReducers } from 'redux'
import products from './products'
import carts from './carts'
const rootReducer = combineReducers({ products, carts })
export default rootReducer
```

`action.js` 

```js
const receiveProducts = (products) => ({ type: 'RECEIVE_PRODUCTS', list: products })
export const getProducts = () => async (dispatch) => {
  const res = await api.getProducts()
  dispatch(receiveProducts(res))
}
export const addToCart = (id, price, max) => (dispatch) => {
  dispatch(productCountHandler(id))
  dispatch({ type: 'ADD_PRODUCT', id, price, max })
}
```

`store.js` 

```js
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
```

#### redux-thunk

异步处理

#### react-redux

数据传输：使用容器组件包裹UI组件，`react-redux` 导出 **Provider**, 使用 **Provider** 包裹最上级组件用于数据传输

`ProductsContainer.js` 

```js
import { connect } from 'react-redux'
import Products from '../pages/Products'
import { addToCart } from '../actions'

function mapStateToProps(state) {
  return state.products
}
function mapDispatchToProps(dispatch) {
  return {
    addToCart(item) {
      const { id, price, max } = item
      dispatch(addToCart(id, price, max))
    },
  }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)
export default ProductsContainer
```

`App.js` 

```js
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '@/containers/LayoutContainer'
import Products from '@/containers/ProductsContainer'
import Cart from '@/containers/CartContainer'
const router = createBrowserRouter([
  { path: '/', element: <Layout />,
    children: [
      { path: '/', element: <Products /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
])
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  )
}
export default App
```

