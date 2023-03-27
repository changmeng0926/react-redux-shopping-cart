const initState = {
  cartProducts: [],
  isClearCarts: false,
}

const cartProducts = (cartProducts, action) => {
  const { type, id, price, max, inputValue } = action
  switch (type) {
    case 'ADD_PRODUCT':
      const curr = cartProducts.find((i) => i.id === id)
      if (curr) {
        curr.count++
      } else {
        cartProducts.push({ id, count: 1, price, max })
      }
      return [...cartProducts]
    case 'CART_SUBTRACT':
      const subCurr = cartProducts.find((i) => i.id === id)
      subCurr.count--
      return [...cartProducts]
    case 'CART_ADD':
      const addCurr = cartProducts.find((i) => i.id === id)
      addCurr.count++
      return [...cartProducts]
    case 'CART_INPUT_COUNT':
      const inputCurr = cartProducts.find((i) => i.id === id)
      if (!inputValue) {
        inputCurr.count = 1
      } else {
        inputCurr.count = inputValue > inputCurr.max ? inputCurr.max : inputValue
      }
      return [...cartProducts]
    case 'CART_CLEAR':
      return []
    default:
      return cartProducts
  }
}

function carts(state = initState, action) {
  return {
    cartProducts: cartProducts(state.cartProducts, action),
    isClearCarts: state.isClearCarts,
  }
}

export default carts
