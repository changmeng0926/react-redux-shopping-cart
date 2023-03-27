import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { getProducts } from '../actions'

function mapStateToProps(state) {
  return state.products
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts() {
      dispatch(getProducts())
    },
  }
}

const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout)

export default LayoutContainer
