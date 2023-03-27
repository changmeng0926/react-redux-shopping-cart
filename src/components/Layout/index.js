/**
 * Description：
 * **/
import './index.scss'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { ShoppingCartOutlined, TaobaoCircleOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useEffect, useState } from 'react'

const items = [
  {
    label: '商品',
    key: '/',
    icon: <TaobaoCircleOutlined />,
    background: '#fff',
  },
  {
    label: '购物车',
    key: '/cart',
    icon: <ShoppingCartOutlined />,
    background: '#eee',
  },
]

function PageLayout(props) {
  const { getProducts } = props
  useEffect(() => {
    getProducts()
  }, [getProducts])

  const navigate = useNavigate()
  const location = useLocation()

  function routerHandler(e) {
    navigate(e.key)
  }

  const [selectedKeys, selectHandler] = useState([])
  const [background, setBackground] = useState('#fff')

  useEffect(() => {
    const curr = items.find((i) => i.key === location.pathname)
    selectHandler([location.pathname])
    setBackground(curr.background)
  }, [location])

  return (
    <div className="page-layout">
      <Menu
        className="menu-container"
        selectedKeys={selectedKeys}
        theme="dark"
        onClick={routerHandler}
        mode="inline"
        items={items}
      />
      <div className="main-container" style={{ background }}>
        <Outlet />
      </div>
    </div>
  )
}

export default PageLayout
