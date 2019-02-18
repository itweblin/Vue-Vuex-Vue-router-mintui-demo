<template>
  <div class="detail">
    <Swiper></Swiper>
    <div class="title">{{detailMsg.proName}}</div>
    <p class="price">价格：
      <span>￥{{detailMsg.price}}</span>
      <del>￥{{detailMsg.oldPrice}}</del>
    </p>
    <div class="size">
      <span>尺码：</span>
      <mt-navbar v-model="selected">
        <mt-tab-item v-for="(val,index) in size" :key="index" :id="val" class="size-con" style="font-size:40px">{{val}}</mt-tab-item>
      </mt-navbar>
    </div>
    <div class="num">
      <p>数量：<span @click="delnum">-</span><span>{{buyNum}}</span><span @click="addnum">+</span>剩余:{{detailMsg.num}}件</p>
    </div>
  </div>
</template>

<script>
import Swiper from '../components/Swiper'
export default {
  components: {
    Swiper
  },
  data () {
    return {
      detailMsg: {},
      size: [],
      selected: true,
      imgsrc: '',
      buyNum: 0,
      productMsg: {
        productId: '',
        size: '',
        num: ''
      },
      goodsDetail: {
        picArr: [],
        goodsMsg: {
          picSrc: '../../../static/images/1.jpg',
          proName: 'vue+vuex+vue-router+mint-ui 开源demo（简单粗暴）欢迎学习与交流，最好点个赞',
          price: '666.66',
          oldPrice: '99999.99',
          num: 10000
        },
        size: '40-50'
      }
    }
  },
  mounted () {
    this.$store.commit('setTitle', '商品详情')
    this.$store.commit('setProductMsg', this.productMsg)
    // 获取详情
    let id = this.$route.params.id
    // console.log(id)
    this.productMsg.productId = id
    // console.log(res)
    this.detailMsg = this.goodsDetail.goodsMsg
    var arr = this.goodsDetail.size.split('-')
    var mix = arr[0] - 0
    var max = arr[1] - 0
    // console.log(mix, max)
    for (var i = 0; i <= max - mix; i++) {
      this.size.push(mix + i)
    }
  },
  // 通过监听tab
  watch: {
    selected (newval, oldval) {
      this.productMsg.size = newval
      // console.log(newval)
    },
    productMsg: {
      handler (newobj) {
        this.$store.commit('setProductMsg', newobj)
        // 存储商品信息
        let data = this.goodsDetail.goodsMsg
        data.buynum = newobj.num
        data.size = newobj.size
        data.id = newobj.productId
        // console.log(data)
        this.$store.commit('setCartData', data)
      },
      deep: true
    }
  },
  methods: {
    addnum () {
      if (this.buyNum < this.detailMsg.num) {
        this.buyNum++
        this.productMsg.num = this.buyNum
      }
    },
    delnum () {
      if (this.buyNum > 1) {
        this.buyNum--
        this.productMsg.num = this.buyNum
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.detail {
  font-size: 16px;
  .img {
    display: block;
    width: 100%;
  }
  .title {
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
  }
  .price {
    font-size: 18px;
    padding: 15px 5px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    span {
      color: red;
      font-size: 22px;
    }
    del {
      font-size: 14px;
      color: #999;
      padding-left: 10px;
    }
  }
  .size {
    padding: 10px 5px;
    .mint-navbar {
      display: inline;
      .size-con {
        display: inline-block;
        width: 35px;
        font-size: 20px;
        border: 2px solid #ccc;
        margin: 2px;
        padding: 9px 0;
      }
      .is-selected {
        color:#000 ;
        background-color: orange;
        border: 2px solid orange;
      }
    }
  }
}
.num{
  p{
    padding: 5px 0;
    span{
      border: 1px solid #333;
      display: inline-block;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
    span:nth-child(2){
      border-left: none;
      border-right: none;
    }
  }
}
</style>
