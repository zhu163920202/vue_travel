<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- router-link 默认会渲染成a标签 加tag=“x” 会渲染成想要的标签 -->
      <router-link tag="li" :to="'/detail/' + item.id"
        class="item borderr-bottom"
        v-for="item of list"
        :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title"> {{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '001',
  //       imgUrl: 'https://imgs.qunarzz.com/sight/p0/1910/37/37c5a67e18f55f78a3.water.jpg_200x200_0702c004.jpg',
  //       title: '南通森林动物园',
  //       desc: '与动物嬉戏，共享和谐人生'
  //     }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item
  overflowo: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #cccccc
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: .06rem
      color: #fff
</style>
