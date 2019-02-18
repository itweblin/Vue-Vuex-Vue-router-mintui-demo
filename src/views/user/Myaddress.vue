<template>
  <div class="myaddress">
      <mt-button type="default" style="width:100%" @click="$router.push({name:'addaddress'})">添加收货地址</mt-button>
      <div v-for='(item,index) in address' :key="index">
       <div class="bian">
          <p>邮编：{{item.postcode}}  收货人：{{item.recipients}}</p>
          <p>{{item.addressDetail}}</p>
       </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      address: []
    }
  },
  mounted () {
    this.$store.commit('setTitle', '收货地址管理')
    // 获取收货地址
    this.address = JSON.parse(localStorage.getItem('addressData')) || []
  }
}
</script>

<style scoped lang="scss">
.bian{
  margin: 10px 10px;
  border: 1px solid #ddd;
  padding: 5px 5px;
  p{
    line-height: 25px;
  }
}
</style>
