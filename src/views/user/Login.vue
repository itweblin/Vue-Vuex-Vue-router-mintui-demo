<template>
  <div class="login">
    <mt-field placeholder="用户名/手机号" v-model="username" class="kuan"></mt-field>
    <mt-field placeholder="密码" type="password" v-model="password" class="kuan"></mt-field>
    <mt-button type="primary" class="bit-login" @click='sendLogin'>登录</mt-button>
    <router-link to='/register' class="register">免费注册</router-link>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { Login } from '@/api/index.js'
export default {
  data () {
    return {
      username: 'itcast',
      password: '111111'
    }
  },
  mounted () {
    this.$store.state.title = '登录'
  },
  methods: {
    sendLogin () {
      Login({ username: this.username, password: this.password }).then(res => {
        if (res.success) {
          history.back()
          // this.$router.push({path: '/me'})
        } else {
          Toast({
            message: res.message,
            position: 'middle',
            duration: 5000
          })
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.login {
  padding: 10px;
  .kuan {
    border: 1px solid #ccc;
    margin-bottom: 10px;
    border-radius: 5px;
    min-height: 40px;
  }
  .bit-login {
    width: 100%;
    margin-top: 25px;
  }
  .register {
    color: #0094ff;
    float: right;
    font-size: 14px;
    margin-top: 15px;
    padding: 5px 2px;
  }
}
</style>
