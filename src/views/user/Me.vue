<template>
  <div class="me">
    <div class="mysmg">
      <div class="my-left"><img src="../../assets/images/user.jpg" alt=""></div>
      <div class="my-right"><p>{{mysmg.username}}</p><span>绑定手机:{{mysmg.mobile}}</span></div>
    </div>
    <router-link to="" class="lianjie">
      <span>账号与安全</span>
      <span>&gt;</span>
    </router-link>
    <router-link :to="{path:'/cart'}" class="lianjie">
      <span>我的购物车</span>
      <span>&gt;</span>
    </router-link>
    <router-link :to="{path:'/myaddress'}" class="lianjie">
      <span>收货地址管理</span>
      <span>&gt;</span>
    </router-link>
    <mt-button @click.native="handleClick"  type="primary" style="margin: 20px auto; display: block; width: 90%;">退出登录</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mysmg: {username: 'vue', mobile: '10086111234'}
    }
  },
  mounted () {
    this.$store.commit('setTitle', '个人中心')
  },
  methods: {
    handleClick () {
    }
  }
}
</script>

<style scoped lang='scss'>
.me{
  padding: 5px 20px;
}
.mysmg{
  display: flex;
  border-bottom: 1px solid #999;
  .my-left{
    width: 50px;
    margin:5px 20px 5px 0;
    img{
      width: 100%;
    }
  }
  .my-right{
    padding: 5px 10px;
    p{
      line-height: 25px;
    }
    span{
      line-height: 25px;
      color: #aaa;
    }
  }
}
.lianjie{
    display: flex;
    border-bottom: 1px solid #999;
    justify-content: space-between;
    padding: 20px 10px 20px 0;
    span{
      font-size: 20px;
    }
    span:nth-child(2){
      color: #aaa;
      font-size: 25px;

    }
  }

</style>
