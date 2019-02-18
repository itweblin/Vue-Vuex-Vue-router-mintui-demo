// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/index.scss'
import './assets/fa/css/font-awesome.css'
import store from './store/store.js'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// import { userMessage } from '@/api/index.js'

Vue.use(MintUI)

Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   if (to.path === '/cart' || to.path === '/me') {
//     userMessage().then(res => {
//       if (!res.error) {
//         next()
//       } else {
//         next({path: '/login'})
//       }
//     })
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
