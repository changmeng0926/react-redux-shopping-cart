import { connect } from 'react-redux'
import CartFootBar from '@/components/CartFootBar'
import { clearCarts, payoff } from '../actions'

function getTotal(state) {
  const { carts, products } = state
  const { cartProducts } = carts
  const { list } = products

  const total = cartProducts.reduce(
    ({ totalCount, totalPrices }, cart) => {
      const product = list.find((i) => i.id === cart.id)
      totalCount = totalCount + cart.count
      totalPrices = totalPrices + product.price * cart.count
      return { totalCount, totalPrices }
    },
    { totalCount: 0, totalPrices: 0 }
  )
  return total
}

function mapStateToProps(state) {
  return {
    total: getTotal(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearCarts() {
      dispatch(clearCarts)
    },
    payoff() {
      dispatch(payoff)
    },
  }
}

const CartFootBarBox = connect(mapStateToProps, mapDispatchToProps)(CartFootBar)

export default CartFootBarBox
