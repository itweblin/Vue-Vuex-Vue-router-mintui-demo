<template>
  <div class="address">
    <mt-field  placeholder="收货人" v-model="addressObj.recipients"></mt-field>
    <mt-field  placeholder="邮编"  v-model="addressObj.postcode"></mt-field>
    <mt-field  placeholder="省市区"  v-model="addressObj.address"></mt-field>
    <mt-field  placeholder="详细地址" type="textarea" rows="4" v-model="addressObj.addressDetail"></mt-field>
    <mt-button @click.native="addAddress"  type="primary" style="margin: 20px auto; display: block; width: 90%;">保存</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addressObj: {
        addressDetail: '',
        address: '',
        recipients: '',
        postcode: ''
      }
    }
  },
  mounted () {
    this.$store.commit('setTitle', '添加收货地址')
  },
  methods: {
    addAddress () {
      if (!this.addressObj.recipients.trim()) {
        this.$toast({
          message: '请填写收货人',
          position: 'middle',
          duration: 2000
        })
        return false
      }
      if (!this.addressObj.postcode.trim()) {
        this.$toast({
          message: '请填写邮编',
          position: 'middle',
          duration: 2000
        })
        return false
      }
      if (!this.addressObj.address.trim()) {
        this.$toast({
          message: '请填写省市区',
          position: 'middle',
          duration: 2000
        })
        return false
      }
      if (!this.addressObj.addressDetail.trim()) {
        this.$toast({
          message: '请填写详细地址',
          position: 'middle',
          duration: 2000
        })
        return false
      }
      // 获取收货地址
      let addressData = JSON.parse(localStorage.getItem('addressData')) || []
      addressData.push(this.addressObj)
      localStorage.setItem('addressData', JSON.stringify(addressData))
      this.$toast({
        message: '添加成功',
        position: 'middle',
        duration: 2000
      })
    }
  }
}
</script>

<style scoped lang="scss">
.bian {
  margin: 10px 10px;
  border: 1px solid #ddd;
  padding: 5px 5px;
  p {
    line-height: 25px;
  }
}
</style>
