<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class="iconfont font-icon">&#xe662;</span>
          {{ this.galleryImgs.length }}
        </div>
      </div>
    </div>
    <common-gallery :imgs="galleryImgs" v-show="showGallery" @close="handleClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  data () {
    return {
      // imgs: [
      //   'http://img1.qunarzz.com/sight/p0/1910/cb/cb094b59f0214daca3.water.jpg_r_800x800_d4e2d179.jpg',
      //   'http://img1.qunarzz.com/sight/p0/1910/31/31e911176183ffa0a3.water.jpg_r_800x800_36cc1586.jpg'
      // ],
      showGallery: false
    }
  },
  components: {
    CommonGallery
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
// 防抖动
.banner
  position relative
  overflow hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
    .banner-title
      flex: 1
      font-size: .32rem
      padding: 0 .2rem
    .banner-number
      padding: 0 .4rem
      height: .32rem
      line-height: .32rem
      margin-top: .14rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8s)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
</style>
