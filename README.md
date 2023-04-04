#### Description

采用 `redux` 实现的简易购物车

目前有产品、购物车两个页面，已实现功能有加入购物车、清空购物车、结算购物车、购物车加减商品



#### redux

数据管理仓库

#### redux-thunk

异步处理

#### react-redux

数据传输

```js
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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

