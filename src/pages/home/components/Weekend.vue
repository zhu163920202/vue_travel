<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item borderr-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title"> {{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '001',
  //       imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
  //       title: '温泉必游',
  //       desc: '为你量身打造绿色健康生活方式和，远离都市的喧嚣，工作的烦恼，还你一个优先雅静之旅'
  //     }, {
  //       id: '002',
  //       imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/58/a02ad3ab47e3e3.jpg_r_640x214_08977098.jpg',
  //       title: '扬州大明寺',
  //       desc: '大明寺扬州第一名胜，集佛教庙宇、文物古迹和园林风光于一体的游览胜地'
  //     }, {
  //       id: '003',
  //       imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/24/4b609109dba139.jpg_r_640x214_b28f6052.jpg',
  //       title: '无锡攻略',
  //       desc: '到无锡，一水，一山，一佛'
  //     }, {
  //       id: '004',
  //       imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
  //       title: '南京必打卡',
  //       desc: '看尽王侯将相荣辱成败，六朝金粉潮起潮落'
  //     }]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  // margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item-img-wrapper
  overflowo: hidden
  height: 0
  padding-bottom: 37.09%
  .item-img
    width: 100%
.item-info
  padding: .2rem
  .item-title
    padding-top: .2rem
    line-height: .54rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #cccccc
    ellipsis()
</style>
