import Vue from 'vue'
import Vuex from 'vuex'

// 让vue使用vuex工具来实现组件之间的数据共享
Vue.use(Vuex)

// 存储数据的对象，我们可以将你需要存储的数据在这个state中定义
const state = {
  title: '',
  productMsg: {
    productId: '',
    size: '',
    num: ''
  },
  cartData: {}
}
// 数据的读写--只能修改 不能获取
const mutations = {
  // 设置title
  setTitle (state, data) {
    state.title = data
  },
  getTitle () {},
  // 设置productMsg
  setProductMsg (state, data) {
    state.productMsg = data
  },
  // 暂时存储购物数据
  setCartData (state, data) {
    state.cartData = data
  }
}
// 触发器--可以执行异步数据操作--通过mutations来触发
const actions = {

}
// 属性封装-类似计算属性--当state方式变化时会触发getters里面的方法
const getters = {
  // 获取productMsg
  getProductMsg () {
    return state.productMsg
  },
  // 获取暂时存储的购物数据
  getCartData () {
    return state.cartData
  }
}

export default new Vuex.Store({
  // strict: true, // 严谨模式
  state,
  getters,
  actions,
  mutations
})
