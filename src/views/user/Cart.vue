<template>
  <div class="cart">
    <ul>
      <li v-for="item in cartList" :key="item.id">
        <div class="left">
          <input type="checkbox" name="" id="" :value="item" v-model="checkedId">
          <img :src="item.picSrc" alt="">
        </div>
        <div class="right">
          <p class="title">{{item.proName}}</p>
          <p>
            <span>￥{{item.price}}</span>
            <span>x{{item.buynum}}双</span>
            <del>￥{{item.oldPrice}}</del>
          </p>
          <p style="margin-top:15px">鞋码：{{item.size}}</p>
        </div>
        <div class="jian">&gt;</div>
      </li>
    </ul>
    <div v-if="cartList.length==0" class="none-data">没有数据</div>
    <div class="dan">
      <span>订单总额：￥{{allprice.toFixed(2)}}</span>
      <span>生成订单</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [],
      cartList: [],
      src: '',
      id: '',
      name: '',
      allprice: 0,
      checkedId: []
    }
  },
  mounted () {
    this.$store.commit('setTitle', '购物车')
    this.cartList = []
    this.cartList = JSON.parse(localStorage.getItem('cartData')) || []
    console.log(this.cartList)
    // 获取本地数据购物车选择的数据
    this.checkedId = JSON.parse(localStorage.getItem('cartSteledData')) || []
    if (this.checkedId.length > 0) {
      let newGoodsList = this.checkedId
      this.allprice = 0
      for (let i = 0; i < newGoodsList.length; i++) {
        this.allprice += newGoodsList[i].num * newGoodsList[i].price
      }
    }
  },
  methods: {
  },
  watch: {
    checkedId (data) {
      // 把数据存入本地存储
      localStorage.setItem('cartSteledData', JSON.stringify(data))
      // console.log(data)
      let newGoodsList = this.checkedId
      this.allprice = 0
      for (let i = 0; i < newGoodsList.length; i++) {
        this.allprice += newGoodsList[i].buynum * newGoodsList[i].price
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.cart {
  .none-data{
    text-align: center;
    margin-top: 100px;
  }
  li {
    display: flex;
    margin: 10px;
    border: 1px solid #ddd;
    position: relative;
    .left {
      width: 100px;
      padding: 5px;
      img {
        width: 100%;
        margin-top: 20px;
      }
    }
    .right {
      flex: 1;
      padding: 5px;
      p {
        font-size: 14px;
        line-height: 18px;
        span {
          font-size: 20px;
          color: red;
          line-height: 40px;
        }
        span:nth-child(2) {
          font-size: 15px;
          color: #ccc;
          float: right;
          margin-right: 30px;
        }
        del {
          color: #ddd;
          margin-left: 5px;
        }
      }
      .title{
        display: -webkit-box;
        overflow: hidden;
        white-space: normal !important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .jian {
      position: absolute;
      top: 44%;
      right: 2%;
      color: #999;
      font-size: 20px;
    }
  }
  .dan {
    position: fixed;
    bottom: 48px;
    left: 0;
    padding: 10px 0 10px 20px;
    color: red;
    width: 100%;
    border-top: 1px solid #ccc;
    background-color: #fff;
    span:nth-child(2) {
      position: absolute;
      right: 0;
      bottom: 0;
      display: inline-block;
      padding: 10px 20px;
      background-color: red;
      color: #fff;
    }
  }
}
</style>
