<template>
  <div class="index">
    <Swiper></Swiper>
    <nav>
      <a href="javascript:;"><img src="../assets/images/nav1.png" alt=""></a>
      <a href="javascript:;"><img src="../assets/images/nav2.png" alt=""></a>
      <a href="javascript:;"><img src="../assets/images/nav3.png" alt=""></a>
      <a href="javascript:;"><img src="../assets/images/nav4.png" alt=""></a>
      <a href="javascript:;"><img src="../assets/images/nav5.png" alt=""></a>
      <a href="javascript:;"><img src="../assets/images/nav2.png" alt=""></a>
    </nav>
    <ul class="goodslist" v-if="goodList.length>0">
      <li v-for="(item,index) in goodList " :key="index">
        <a href="javascript:;"><img :src="item.imgurl" alt="">
          <p>adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
          <div class="price">
             <span>￥{{item.nowPrice}}</span>
          <del>￥{{item.delPrice}}</del>
          </div>
          <mt-button type="primary"  size="small" class="btn" @click='btn(index+6)'>立即购买</mt-button>
        </a>
      </li>
    </ul>
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
      goodList: [
        {imgurl: '../static/images/1.jpg', nowPrice: '560.00', delPrice: '1888.00'},
        {imgurl: '../static/images/1.jpg', nowPrice: '520.00', delPrice: '2888.00'},
        {imgurl: '../static/images/1.jpg', nowPrice: '510.00', delPrice: '2988.00'},
        {imgurl: '../static/images/1.jpg', nowPrice: '360.00', delPrice: '8788.00'},
        {imgurl: '../static/images/1.jpg', nowPrice: '5160.00', delPrice: '6888.00'},
        {imgurl: '../static/images/1.jpg', nowPrice: '160.00', delPrice: '3888.00'},
        {imgurl: '../static/images/1.jpg', nowPrice: '360.00', delPrice: '888.00'}
      ]
    }
  },
  created () {
    this.$store.commit('setTitle', '首页')
  },
  methods: {
    btn (id) {
      this.$router.push({name: 'detail', params: {id: id}})
    }
  }
}
</script>

<style scoped lang="scss">
.ban-swipe {
  a {
    width: 100%;
    display: block;
    > img {
      display: block;
      // height: 100%;
      width: 100%;
    }
  }
}
nav {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  > a {
    width: 33.333333%;
    > img {
      width: 100%;
    }
  }
}
.goodslist{
  display: flex;
  font-size: 13px;
  color: #888;
  line-height: 16px;
  padding: 10px;
  text-align: center;
  justify-content: space-between;
  flex-wrap: wrap;
  li{
    width: 49%;
    border:1px solid #ddd;
    box-shadow: 0px 0px 3px 3px #eee;
    margin-bottom: 5px;
    a{
      width: 100%;
      img{
        width: 100%;
        height: 2.5rem;
        display: block;
      }
      .price{
         line-height: 30px;
         span{
           color:#e92323;
         }
         del{
           font-size: 12px;
         }
        }
    }
    .btn{
      margin-bottom: 10px;
    }
  }
}
</style>
