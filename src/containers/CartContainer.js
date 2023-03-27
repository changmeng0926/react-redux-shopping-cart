import { connect } from 'react-redux'
import Cart from '../pages/Cart'
import { subtract, add, countChange, payoff } from '../actions'

function getCartList(state) {
  const { carts, products } = state
  const { cartProducts } = carts
  const { list } = products
  const cartList = cartProducts.map((cart) => {
    const { id, name, price, url, max } = list.find((product) => product.id === cart.id)
    return { id, name, price, url, count: cart.count, max }
  })
  return cartList
}

function mapStateToProps(state) {
  return {
    cartList: getCartList(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    subtract(cart) {
      if (cart.count === 1) return
      dispatch(subtract(cart))
    },
    add(cart) {
      if (cart.count === cart.max) return
      dispatch(add(cart))
    },
    countChange(value, cart) {
      dispatch(countChange(value, cart))
    },
    payoff() {
      dispatch(payoff)
    },
  }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartContainer
