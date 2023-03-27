import http from './http'

export async function getProducts() {
  const res = await http.get('/products')
  if (res.code === 200) {
    return [
      {
        id: 1,
        name: 'iphone 14Pro',
        price: 7999,
        count: 18,
        max: 18,
        url: require('../assets/imgs/iphone14Pro.png'),
      },
      {
        id: 2,
        name: 'iphone 14',
        price: 5999,
        count: 21,
        max: 21,
        url: require('../assets/imgs/iphone14.png'),
      },
      {
        id: 3,
        name: 'iphone 13',
        price: 5399,
        count: 8,
        max: 8,
        url: require('../assets/imgs/iphone13.png'),
      },
      {
        id: 4,
        name: 'iphone SE',
        price: 3499,
        count: 16,
        max: 16,
        url: require('../assets/imgs/iphoneSE.png'),
      },
      {
        id: 5,
        name: 'iphone 12',
        price: 4699,
        count: 5,
        max: 5,
        url: require('../assets/imgs/iphone12.png'),
      },
    ]
  } else {
    return []
  }
}
