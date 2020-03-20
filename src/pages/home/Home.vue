<template>
  <div>
    <!-- <home-header :city="city"></home-header> -->
    <!-- 使用vuex，cities不需要后端数据传入，是前端存储的数据 -->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// 引入的是局部组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      // city: '',
      swiperList: [],
      iconList: [],
      weekendList: [],
      recommendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // res为获取的index.json中的数据
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        // const data = res.data
        // this.city = res.city
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  // 发送ajax请求获取数据
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
