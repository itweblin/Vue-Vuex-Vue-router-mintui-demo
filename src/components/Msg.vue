<template>
  <!-- 消息提示框 -->
    <div class="msg-box" v-if="msgShow" ref="top" :style="setTop">{{msgData}}
    </div>
    <!-- <div class="msg-box" v-show="msgShow">
      <div class="msg" ref="top" :style="setTop">{{msgData}}</div>
    </div> -->
</template>

<script>
export default {
  data () {
    return {
      msgShow: false,
      msgData: '',
      setTimeoutStatus: 0,
      setTop: 'top:30%'
    }
  },
  methods: {
    // 自动关闭演示器
    timeClose (obj) {
      this.setTop = `top:${obj.top}` || 'top:30%'
      let times = obj.time || 2000
      // 清除定时器
      clearTimeout(this.setTimeoutStatus)
      this.msgShow = true
      this.msgData = obj.msg
      var that = this
      this.setTimeoutStatus = setTimeout(function () {
        that.msgShow = false
      }, times)
    }
  }
}
</script>

<style scoped lang='scss'>
// 消息提示框
.msg-box{
  position: fixed;
  // height: 100%;
  // width: 100%;
  // top: 0;
  // left: 0;
  z-index: 9999999999999;
  display: inline-block;
  background-color: #666;
  z-index: 1000;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  padding: .15rem .3rem;
  font-size: .26rem;
  color: #fff;
  border-radius: 5px;
  text-align: center;
}
// .msg-box{
//   position: fixed;
//   height: 100%;
//   width: 100%;
//   top: 0;
//   left: 0;
//   z-index: 9999999999999;
// }
// .msg{
//   // white-space : nowrap;
//   position: relative;
//   display: inline-block;
//   background-color: #666;
//   z-index: 1000;
//   left: 50%;
//   top: 30%;
//   transform: translateX(-50%);
//   padding: .15rem .3rem;
//   font-size: .26rem;
//   color: #fff;
//   border-radius: 5px;
//   text-align: center;
// }
</style>
