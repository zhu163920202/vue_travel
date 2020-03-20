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
import { mapState } from 'vuex'
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
      lastCity: '',
      // city: '',
      swiperList: [],
      iconList: [],
      weekendList: [],
      recommendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      // axios.get('/api/index.json')
      // 需要根据不同的city返回不同的首页内容
      axios.get('/api/index.json?city=' + this.city)
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
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    // 每次页面重新显示时都会被执行
    // 当页面被加载时判断与上一次加载时的city是否相同，不同则重新发送ajax请求
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>
