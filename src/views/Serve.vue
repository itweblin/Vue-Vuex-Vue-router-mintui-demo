<template>
  <div class="serve">
    <div class="ser-con">
      <mt-search v-model="serveKey"></mt-search>
      <mt-button size="small" class="serbtn" @click="getserve">搜索</mt-button>
    </div>
    <div class="ser-ss">
      <span v-show="serArr.length!==0" class="title">搜索历史</span>
      <mt-cell :to="{'name': 'serveList', params: {'key': item}}"
       :title="item" v-for="(item,index) in serArr" :key='index'><mt-button type="danger" size='small' @click.prevent.stop="delServe(index)">x</mt-button></mt-cell>
      <!-- <mt-cell :to="{'path':'/serveList',query:{'key':item}}" :title="item" v-for="(item,index) in serArr" :key='index' ><span style="color: green">x</span></mt-cell> -->
      <span v-show="serArr.length===0">没有任何搜索历史</span>
    </div>
    <msg ref="mymsg"></msg>
  </div>
</template>

<script>
import msg from '../components/Msg'
export default {
  components: {
    msg
  },
  data () {
    return {
      serveKey: '',
      serArr: []
    }
  },
  created () {
    this.$store.commit('setTitle', '搜索中心')
  },
  mounted () {
    // 先从本地存储取出数据
    this.serArr = localStorage.getItem('serve') ? JSON.parse(localStorage.getItem('serve')) : []
  },
  methods: {
    getserve () {
      if (!this.serveKey.trim()) {
        console.log('不能为空')
        this.$refs.mymsg.timeClose({msg: '不能为空'})
        return false
      }
      // 先从本地存储取出数据
      this.serArr = localStorage.getItem('serve') ? JSON.parse(localStorage.getItem('serve')) : []
      // 查询有没有相同搜索记录--删除相同记录
      var index = this.serArr.indexOf(this.serveKey)
      if (index !== -1) {
        this.serArr.splice(index, 1)
      }
      this.serArr.unshift(this.serveKey)
      // 存入本地存储
      localStorage.setItem('serve', JSON.stringify(this.serArr))
      this.$router.push({'name': 'serveList', 'params': {'key': this.serveKey}})
      console.log(this.serveKey)
    },
    delServe (index) {
      console.log(index)
      this.serArr.splice(index, 1)
      localStorage.setItem('serve', JSON.stringify(this.serArr))
    }
  }
}
</script>

<style lang="scss" scoped>
.serve {
  width: 100%;
}
.ser-con{
   position: relative;
   .mint-search {
    height: auto;
    width: 100%;
  }
  .serbtn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 3;
  }
}
.ser-ss{
  .title{
    font-size: 18px;
  }
}
</style>
