<template>
  <div class="cate">
    <div class="left">
      <mt-navbar v-model="selected" class="tabnav">
        <mt-tab-item :id="val.id" v-for="val in cateList" :key="val.id">
          {{val.categoryName}}</mt-tab-item>
      </mt-navbar>
    </div>
    <div class="right">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item :id="val.id" v-for="val in cateList" :key="val.id" class="second">
          <div class="categoryName">{{val.categoryName}}</div>
          <a href="javascript:;" v-for="item in seCateList" :key="item.id">
            <img :src="item.brandLogo" alt="">
            <span> {{item.brandName}}</span>
          </a>
          <p v-show="seCateList.length===0">没有数据</p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cateList: [
        {id: 1, categoryName: '分类1'},
        {id: 2, categoryName: '分类2'},
        {id: 3, categoryName: '分类3'},
        {id: 4, categoryName: '分类4'},
        {id: 5, categoryName: '分类5'},
        {id: 6, categoryName: '分类6'},
        {id: 7, categoryName: '分类7'},
        {id: 8, categoryName: '分类8'},
        {id: 9, categoryName: '分类9'},
        {id: 10, categoryName: '分类10'},
        {id: 11, categoryName: '分类11'},
        {id: 12, categoryName: '分类12'},
        {id: 13, categoryName: '分类13'},
        {id: 14, categoryName: '分类14'}
      ],
      seCateList: [
        {id: 1, brandLogo: '../../static/images/brand1.png', brandName: '品牌1'},
        {id: 2, brandLogo: '../../static/images/brand2.png', brandName: '品牌2'},
        {id: 3, brandLogo: '../../static/images/brand3.png', brandName: '品牌3'},
        {id: 4, brandLogo: '../../static/images/brand4.png', brandName: '品牌4'},
        {id: 5, brandLogo: '../../static/images/brand5.png', brandName: '品牌5'},
        {id: 6, brandLogo: '../../static/images/brand6.png', brandName: '品牌6'},
        {id: 7, brandLogo: '../../static/images/brand7.png', brandName: '品牌7'},
        {id: 8, brandLogo: '../../static/images/brand8.png', brandName: '品牌8'}
      ],
      selected: 1
    }
  },
  created () {
    this.$store.commit('setTitle', '分类')
  },
  watch: {
    selected (newval, oldval) {
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.cate {
  height: 100%;
  display: flex;
  background-color: #ddd;
  .left {
    width: 100px;
    overflow: scroll;
    li {
      line-height: 40px;
      text-align: center;
      background-color: #fff;
      margin-bottom: 1px;
    }
    .tabnav {
      display: flex;
      flex-direction: column;
    }
  }
  .right {
    flex: 1;
    padding-left: 10px;
    overflow: scroll;
    .second{
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      font-size: 14px;
      .categoryName{
        width: 100%;
        text-align: center;
        padding: 10px 0;
      }
      a{
        width: 32.3%;
        text-align: center;
        margin-right: 2px;
        img{
          width: 100%;
        }
        span{
          padding: 5px 0;
          display: block;
        }
      }
    }
    p{
      font-size: 14px;
    }
  }
}
</style>
