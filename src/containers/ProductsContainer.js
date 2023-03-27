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
