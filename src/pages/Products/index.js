/**
 * Description：产品列表
 * **/
import './index.scss'
import { Card, Button } from 'antd'
import CartFootBarBox from '@/containers/CartFootBarBox'

function Products(props) {
  const { list, addToCart } = props

  return (
    <Card bordered={false} className="products">
      <div className="product-list">
        {list.map((i) => (
          <Card bordered={false} key={i.id}>
            <img alt="" src={i.url}></img>
            <div className="product-name">{i.name}</div>
            <div className="product-count">剩余：{i.count}</div>
            <div className={`sell-out ${i.count > 0 && 'hidden'}`}>售罄</div>
            <Button
              onClick={() => addToCart(i)}
              type="primary"
              className={`product-button ${!(i.count > 0) && 'hidden'}`}
              size="small"
            >
              加入购物车
            </Button>
          </Card>
        ))}
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <CartFootBarBox background={'#F0F2F5'} />
    </Card>
  )
}

export default Products
