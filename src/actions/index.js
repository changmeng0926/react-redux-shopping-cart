import * as api from '../api'

const receiveProducts = (products) => ({
  type: 'RECEIVE_PRODUCTS',
  list: products,
})

// 获取产品数据
export const getProducts = () => async (dispatch) => {
  const res = await api.getProducts()
  dispatch(receiveProducts(res))
}

// 添加购物车产品数量变化
const productCountHandler = (id) => (dispatch) => {
  dispatch({ type: 'COUNT_HANDLER', id })
}

// 添加购物车
export const addToCart = (id, price, max) => (dispatch) => {
  dispatch(productCountHandler(id))
  dispatch({ type: 'ADD_PRODUCT', id, price, max })
}

// 购物车减
export const subtract = (cart) => (dispatch) => {
  dispatch({ type: 'CART_SUBTRACT', id: cart.id })
  dispatch({ type: 'CART_SUBTRACT_PRO', id: cart.id })
}
// 购物车加
export const add = (cart) => (dispatch) => {
  dispatch({ type: 'CART_ADD', id: cart.id })
  dispatch({ type: 'CART_ADD_PRO', id: cart.id })
}
// 购物车输入
export const countChange = (value, cart) => (dispatch) => {
  dispatch({ type: 'CART_INPUT_COUNT', id: cart.id, inputValue: value })
  dispatch({ type: 'CART_INPUT_COUNT_PRO', id: cart.id, inputValue: value })
}
export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: 'CART_DELETE_PRODUCT', id })
  dispatch({ type: 'RESET_BY_ID', id })
}
// 清空购物车
export const clearCarts = (dispatch) => {
  dispatch({ type: 'CART_CLEAR' })
  dispatch({ type: 'RESET' })
}
// 结算
export const payoff = (dispatch) => {
  dispatch({ type: 'CART_CLEAR' })
  dispatch({ type: 'INIT' })
}
