<template>
  <div id="app">
    <!-- 头部 -->
    <lt-header></lt-header>
    <!-- 内容 -->
    <lt-content></lt-content>
    <!-- 底部 -->
    <lt-footer></lt-footer>
  </div>
</template>
<script>
import './assets/js/rem.js'
import header from './components/Header'
import content from './components/Content'
import footer from './components/Footer'
export default {
  components: {
    'lt-header': header,
    'lt-content': content,
    'lt-footer': footer
  },
  name: 'App',
  data () {
    return {

    }
  }
}
</script>

<style>
#app{
  font-size: 16px;
  background-color: #fff;
}
</style>
