/**
 * Description：购物车 & 产品页 共用 footBar
 * **/
import { Button } from 'antd'
import './index.scss'

function CartFootBar(props) {
  const { clearCarts, payoff, total, width, right, background = '#fff', borderColor } = props

  return (
    <div className="cart-foot-bar" style={{ width, right, background, borderColor }}>
      <div className="left">
        <Button className="clear-button" onClick={clearCarts} size="large" shape="round">
          清空购物车
        </Button>
      </div>
      <div className="right">
        <span className="product-total">
          已选商品
          <span className="count">{total.totalCount}</span>件
        </span>
        <span className="price-total">
          合计（不含运费）:
          <span className="count">{total.totalPrices}</span>
        </span>
        <Button className="settle-up" onClick={payoff} type="primary" size="large" shape="round">
          结算
        </Button>
      </div>
    </div>
  )
}

export default CartFootBar
