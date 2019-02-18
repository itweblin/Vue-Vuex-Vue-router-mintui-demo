<template>
  <div>
    <mt-tabbar :fixed="true" class="footer" v-show="!footerCar">
      <mt-tab-item id="首页">
        <router-link to="/index" :class="action">
          <p class="myicon myicon-menu"></p>
          首页
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="分类">
        <router-link to="/cate">
          <p class="myicon myicon-menu"></p>
          分类
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <router-link to="/cart">
          <p class="myicon myicon-menu"></p>
          购物车
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="会员中心">
        <router-link to="/me">
          <p class="myicon myicon-menu"></p>
          会员中心
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
    <mt-tabbar :fixed="true" class="footer2" v-show="footerCar">
      <p class="myicon myicon-menu"></p>
      <mt-button type="danger" class="addCar" @click="addCar">加入购物车</mt-button>
      <mt-button type="danger" class="buy"  @click="buy">立即购买</mt-button>
    </mt-tabbar>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {}
  },
  computed: {
    action () {
      return this.$route.path === '/' || this.$route.path === '/index'
        ? 'isActive'
        : ''
    },
    footerCar () {
      return (this.$route.path.indexOf('detail') === 1)
    }
  },
  methods: {
    buy () {
      this.$toast({
        message: '未有该功能',
        position: 'middle',
        duration: 2000
      })
    },
    addCar () {
      var product = this.$store.getters.getProductMsg
      for (let key in product) {
        if (!product[key]) {
          this.$toast({
            message: '请选择正确的购物',
            position: 'middle',
            duration: 2000
          })
          return false
        }
      }
      // 获取购物数据
      let data = this.$store.getters.getCartData
      let arr = JSON.parse(localStorage.getItem('cartData')) || []
      arr.push(data)
      localStorage.setItem('cartData', JSON.stringify(arr))
      MessageBox.confirm('是否前往购物车?', '添加成功').then(action => {
        if (action === 'confirm') {
          this.$router.push({path: '/cart'})
        }
      })
    }
  }
  // buyGoods () {
  //   this.$router.push({path: '/login'})
  // }
}
</script>

<style scoped lang="scss">
.footer {
  background-color: #0094ff;
  color: #fff;
  p {
    line-height: 20px;
    font-size: 20px;
    margin-bottom: 2px;
  }
}
.footer2{
  background: #eee;
  display: flex;
  align-items: center;
  padding: 0 5px;
  p{
    width: 30px;
    margin-right: 10px;
  }
  .addCar{
    width: 50%;
    margin-right: 10px;
  }
  .buy{
    flex: 1;
    background-color: rgb(255, 115, 0);
  }
}
.isActive {
  color: orange;
}
</style>
