<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallery-img" :src="item">
        </swiper-slide>
        <!-- 分页 -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return [
          // 'http://img1.qunarzz.com/sight/p0/1910/cb/cb094b59f0214daca3.water.jpg_r_800x800_d4e2d179.jpg',
          // 'http://img1.qunarzz.com/sight/p0/1910/31/31e911176183ffa0a3.water.jpg_r_800x800_36cc1586.jpg'
        ]
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 监听当前或父级DOM发生变化时，会自我更新一次
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 999
  position: fixed
  left: 0
  right:0
  top: 0
  bottom: 0
  background: #000
  .wrapper
    // overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 100%
    // background: #fff
    .gallery-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
