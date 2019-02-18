<template>
  <div class="serveList">
    <div class="lt_searchBox">
      <form action="">
        <input type="text" class="lt_searchKey" v-model="serveKey">
        <span class="lt_searchBtn" @click='sendServe'>搜索</span>
      </form>
    </div>
    <!-- 排序结构 -->
    <div class="lt_sorder">
      <a href="javascript:;">上架时间
        <span class="fa fa-angle-down"></span>
      </a>
      <a href="javascript:;" @click="handlerPrice" :class="{'active':isIndex===0}">价格
        <span :class="{'fa':true,'fa-angle-down':isPrice,'fa-angle-up':!isPrice}"></span>
      </a>
      <a href="javascript:;" @click="handlerNum" :class="{'active':isIndex===1}">销量
        <span :class="{'fa':true,'fa-angle-down':isNum,'fa-angle-up':!isNum}"></span>
      </a>
      <a href="javascript:;">折扣
        <span class="fa fa-angle-down"></span>
      </a>
    </div>
    <div style="overflow: scroll;height:80%">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill='false' :max-distance="150" @top-status-change="handleTopChange">
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
        <span v-show="topStatus === 'drop'">释放更新</span>
      </div>
      <div class="list">
        <a href="javascript:;" v-for="item in serveArr" :key="item.id" class="goodslist">
          <img :src="item.picsrc" alt="">
          <p class="line2">{{item.proName}}</p>
          <div class="price">
            <span>￥{{item.price}}</span>
            <del>￥{{item.oldPrice}}</del>
          </div>
          <mt-button type="primary" size="small" class="btn" @click="buyGood(item.id)">立即购买</mt-button>
        </a>
        <span v-show='isData'>没有数据了</span>
      </div>
      </mt-loadmore>
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
      allLoaded: false,
      topStatus: '',
      serveArr: [],
      isData: false,
      serveObj: {
        proName: '',
        brandId: '',
        price: '',
        num: '',
        page: 1,
        pageSize: 4
      },
      isPrice: true,
      isNum: true,
      isIndex: '',
      modelData: [
        {id: 1, picsrc: '../../static/images/1.jpg', proName: '商品名', price: '10.00', oldPrice: '30.00'},
        {id: 2, picsrc: '../../static/images/1.jpg', proName: '商品名', price: '20.00', oldPrice: '40.00'},
        {id: 3, picsrc: '../../static/images/1.jpg', proName: '商品名', price: '30.00', oldPrice: '50.00'},
        {id: 4, picsrc: '../../static/images/1.jpg', proName: '商品名', price: '40.00', oldPrice: '60.00'},
        {id: 5, picsrc: '../../static/images/1.jpg', proName: '商品名', price: '50.00', oldPrice: '70.00'}
      ]
    }
  },
  created () {
    this.$store.commit('setTitle', '搜索中心')
  },
  mounted () {
    // 获取搜索关键词
    // this.serveKey = this.$route.query.key // path传参
    this.serveKey = this.$route.params.key // name传参
    // console.log(this.serveKey)
    this.serveArr = this.modelData
  },
  methods: {
    initProduct () {
      this.serveArr = this.modelData
    },
    // 点击搜索按钮
    sendServe () {
      if (!this.serveKey.trim()) {
        console.log('不能为空')
        this.$refs.mymsg.timeClose({msg: '不能为空'})
        return false
      }
      // 初始化数据
      this.allLoaded = false
      this.serveObj.page = 1
      this.isData = false
      this.isPrice = true
      this.isNum = true
      this.isIndex = ''
      this.serveObj.num = ''
      this.serveObj.price = ''

      this.initProduct()
    },
    // 点击切换价格排序
    handlerPrice () {
      // 切换样式
      this.isPrice = !this.isPrice
      this.isNum = true
      this.isIndex = 0
      // 初始化数据
      this.allLoaded = false
      this.serveObj.page = 1
      this.isData = false
      // 排序逻辑
      if (this.isPrice) {
        this.serveObj.price = 2
        this.initProduct()
      } else {
        this.serveObj.price = 1
        this.initProduct()
      }
    },
    // 点击切换数量排序
    handlerNum () {
      // 切换样式
      this.isNum = !this.isNum
      this.isPrice = true
      this.isIndex = 1
      // 初始化数据
      this.allLoaded = false
      this.serveObj.page = 1
      this.isData = false
      // 排序逻辑
      if (this.isNum) {
        this.serveObj.num = 2
        this.initProduct()
      } else {
        this.serveObj.num = 1
        this.initProduct()
      }
    },
    loadTop () {
      // 加载更多数据
      this.serveObj.page = 1
      this.isData = false
      this.allLoaded = false
      this.$refs.loadmore.onTopLoaded()
      console.log(1)
      this.initProduct()
    },
    loadBottom () {
      // 加载更多数据
      this.serveObj.page++
      this.$refs.loadmore.onBottomLoaded()
    },
    // 滑动触发的事件
    handleTopChange: function (status) {
      this.topStatus = status
    },
    // 点击购买跳转页面
    buyGood (id) {
      // console.log(id)
      this.$router.push({name: 'detail', params: {id: id}})
    }
  }
}
</script>

<style lang="scss" scoped>
.serveList{
  height: 100%;
  // overflow:hidden;
}
.lt_searchBox {
  padding: 10px 10px 0;
  position: relative;
  input {
    width: 100%;
    height: 34px;
    border: none;
    border: 1px solid #1a70a6;
    border-radius: 5px;
    margin-bottom: 0px;
    outline: none;
    padding: 0 65px 0 5px;
    box-sizing: border-box;
  }
  span {
    width: 60px;
    height: 32px;
    background-color: #1a70a6;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    position: absolute;
    top: 11px;
    right: 9px;
    font-size: 15px;
    text-align: center;
    line-height: 30px;
  }
}
.lt_sorder {
  width: 100%;
  display: flex;
  background-color: #ddd;
  margin: 10px 0px;
  > a {
    flex: 1;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    color: #333;
    -webkit-tap-highlight-color: transparent;
    &.active {
      color: orange;
    }
  }
}
.list {
  display: flex;
  font-size: 13px;
  color: #888;
  line-height: 16px;
  padding: 10px;
  text-align: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .goodslist {
    width: 49%;
    border: 1px solid #ddd;
    box-shadow: 0px 0px 3px 3px #eee;
    margin-bottom: 5px;
    // height:300px;
    img {
      width: 100%;
    }
    .price {
      line-height: 30px;
      span {
        color: #e92323;
      }
      del {
        font-size: 12px;
      }
    }
    .btn {
      margin-bottom: 10px;
    }
  }
}
.line2 {
  display: -webkit-box; /*将对象作为弹性伸缩盒子模型显示*/
  overflow: hidden;

  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;

  -webkit-line-clamp: 2; /*限制在一个块元素显示的文本的行数*/
  -webkit-box-orient: vertical; /*设置或检索伸缩盒对象的子元素的排列方式*/
}
.active {
  color: orange;
}
</style>
