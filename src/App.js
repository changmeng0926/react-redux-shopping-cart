import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from '@/containers/LayoutContainer'
import Products from '@/containers/ProductsContainer'
import Cart from '@/containers/CartContainer'
import store from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
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
