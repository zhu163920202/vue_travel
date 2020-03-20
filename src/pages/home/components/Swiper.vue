<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
      // },
      // swiperList: [{
      //   id: '001',
      //   imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20203/27e6a9c917fd3e81c25b0eed97a62580.jpg_890x330_0cb0a7f8.jpg'
      // }, {
      //   id: '002',
      //   url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20203/d0193ac1924ea144f24b5ba6b6b22824.jpg_890x330_f5665641.jpg'
      // }]
    }
  }
}
</script>

<style lang="stylus" scoped>
// 实现样式穿透，不受scope限制
.wrapper >>> .swiper-pagination-bullet-active
  background-color: #fff
.wrapper
  overflow hidden
  width: 100%
  height: 0
  padding-bottom: 31%
  background-color: grey
  .swiper-img
    width: 100%
</style>
