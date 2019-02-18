<template>
  <mt-header :title='title' :fixed="true">
    <a href="javascript:history.back()" slot="left" v-show="isshow">
      <mt-button icon="back"></mt-button>
    </a>
    <mt-button slot="right" @click="$router.push({'path':'/serve'})" v-show='sousuo'>搜索</mt-button>
    <mt-button slot="right" @click="$router.push({'path':'/'})" v-show='souye'>首页</mt-button>
  </mt-header>

</template>

<script>
export default {
  data () {
    return {
      search: '',
      title: ''
    }
  },
  mounted () {
    this.title = this.$store.commit('getTitle')
  },
  computed: {
    isshow () {
      return !(this.$route.path === '/' || this.$route.path === '/index')
    },
    sousuo () {
      return !(this.$route.path === '/serve' || this.$route.path.indexOf('serveList') !== -1 || this.$route.path.indexOf('detail') !== -1 || this.$route.path === '/login' || this.$route.path === '/me' || this.$route.path === '/register' || this.$route.path === '/myaddress' || this.$route.path === '/addaddress')
    },
    souye () {
      return !(this.$route.path.indexOf('detail') === -1)
    }
  },
  watch: {
    '$store.state.title' (val) {
      this.title = val
    }
  }
}
</script>

<style>
.mint-header.is-fixed {
  z-index: 99999;
}
</style>
