import axios from 'axios'
const baseURL = 'http://127.0.0.1:3000'
axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = true

// 获取一级分类名
export const getCate = () => {
  return axios.get('/category/queryTopCategory').then(res => {
    return res.data
  })
}
// 获取二级分类名
export const getSecondCate = (pa) => {
  return axios.get('/category/querySecondCategory', {params: pa}).then(res => {
    return res.data
  })
}

// 搜索列表
export const getProduct = (pa) => {
  return axios.get('/product/queryProduct', {params: pa}).then(res => {
    return res.data
  })
}

// 获取商品详情
export const getDetail = (pa) => {
  return axios.get('/product/queryProductDetail', {params: pa}).then(res => {
    return res.data
  })
}

// 登录
export const Login = (pa) => {
  return axios.post('/user/login', pa).then(res => {
    return res.data
  })
}
// 个人中心
export const userMessage = () => {
  return axios.get('/user/queryUserMessage').then(res => {
    return res.data
  })
}
// 登出
export const logout = () => {
  return axios.get('/user/logout').then(res => {
    return res.data
  })
}
// 注册
export const register = (pa) => {
  return axios.post('/user/register', pa).then(res => {
    return res.data
  })
}
// vcode
export const vCode = () => {
  return axios.get('/user/vCode').then(res => {
    return res.data
  })
}
// 购物车
export const queryCart = () => {
  return axios.get('/cart/queryCart').then(res => {
    return res.data
  })
}
// 添加购物车
export const addCart = (pa) => {
  return axios.post('/cart/addCart', pa).then(res => {
    return res.data
  })
}
// 查询收货地址
export const queryAddress = () => {
  return axios.get('/address/queryAddress').then(res => {
    return res.data
  })
}
// 三级联动地址
export const queryAddressTree = () => {
  return axios.get('/address/queryAddressTree').then(res => {
    return res.data
  })
}
// 添加收货地址
export const addAddress = (pa) => {
  return axios.post('/address/addAddress', pa).then(res => {
    return res.data
  })
}
