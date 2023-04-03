/**
 * Description：购物车
 * **/
import './index.scss'
import { Button, Empty, InputNumber } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import CartFootBarBox from '@/containers/CartFootBarBox'
import SelfCard from '@/components/common/SelfCard'

function Cart(props) {
  const { cartList, subtract, add, countChange, payoff } = props

  return (
    <div className="shopping-cart">
      <SelfCard
        className="bottom-top top-right"
        border={false}
        header={
          <>
            <div className="cart-title-left">购物车（全部{36}）</div>
            <div className="cart-title-right">
              已选商品（不含运费）<span className="total">{0.0}</span>
              <Button onClick={payoff} shape="round">
                结算
              </Button>
            </div>
          </>
        }
        footer={<CartFootBarBox />}
      >
        <div className={`products ${!(cartList.length > 0) && 'hidden'}`}>
          {cartList.map((cart) => (
            <div className="product-item" key={cart.id}>
              <img src={cart.url} alt="" />
              <span className="item-name">{cart.name}</span>
              <span className="item-price">￥{cart.price}</span>
              <InputNumber
                className="add-subtract"
                addonBefore={<div onClick={() => subtract(cart)}>-</div>}
                addonAfter={<div onClick={() => add(cart)}>+</div>}
                value={cart.count}
                controls={false}
                onChange={(v) => countChange(v, cart)}
              ></InputNumber>
              <Button shape="round" type="text">
                删除
              </Button>
            </div>
          ))}
        </div>
        {!(cartList.length > 0) && (
          <Empty
            className="no-data"
            image={<ShoppingCartOutlined className="no-data-icon" />}
            imageStyle={{ height: 48 }}
            description="请添加商品到购物车"
          ></Empty>
        )}
      </SelfCard>
    </div>
  )
}

export default Cart
