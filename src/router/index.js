import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index.vue'
import Cate from '@/views/Cate.vue'
import Serve from '@/views/Serve.vue'
import ServeList from '@/views/ServeList.vue'
import Detail from '@/views/Detail.vue'
import Login from '@/views/user/Login.vue'
import Me from '@/views/user/Me.vue'
import Register from '@/views/user/Register.vue'
import Cart from '@/views/user/Cart.vue'
import Myaddress from '@/views/user/Myaddress.vue'
import Addaddress from '@/views/user/Addaddress.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'isActive',
  routes: [
    {
      path: '/',
      name: 'default',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/cate',
      name: 'cate',
      component: Cate
    },
    {
      path: '/serve',
      name: 'serve',
      component: Serve
    },
    {
      path: '/serveList/:key',
      name: 'serveList',
      component: ServeList
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/myaddress',
      name: 'myaddress',
      component: Myaddress
    },
    {
      path: '/addaddress',
      name: 'addaddress',
      component: Addaddress
    }
  ]
})
