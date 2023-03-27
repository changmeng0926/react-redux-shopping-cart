const initState = {
  list: [],
}

const list = (state, { type, list, id, inputValue }) => {
  switch (type) {
    case 'RECEIVE_PRODUCTS':
      return list
    case 'COUNT_HANDLER':
      const product = state.find((i) => i.id === id)
      product.count--
      return [...state]
    case 'CART_SUBTRACT_PRO':
      const subCurr = state.find((i) => i.id === id)
      subCurr.count++
      return [...state]
    case 'CART_ADD_PRO':
      const addCurr = state.find((i) => i.id === id)
      addCurr.count--
      return [...state]
    case 'CART_INPUT_COUNT_PRO':
      const inputCurr = state.find((i) => i.id === id)
      if (!inputValue) {
        inputCurr.count = inputCurr.max - 1
      } else {
        inputCurr.count = inputValue > inputCurr.max ? 0 : inputCurr.max - inputValue
      }
      return [...state]
    case 'RESET':
      state.forEach((i) => (i.count = i.max))
      return [...state]
    case 'INIT':
      state.forEach((i) => (i.max = i.count))
      return [...state]
    default:
      return state
  }
}

function products(state = initState, action) {
  return {
    list: list(state.list, action),
  }
}

export default products
