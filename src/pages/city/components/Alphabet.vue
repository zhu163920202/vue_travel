<template>
  <ul class="list">
    <li class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @click="handleLetterClick"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (var i in this.cities) {
        letters.push(i)
      }
      return letters
      // ['A', 'B', 'C'。。。]
    }
  },
  methods: {
    handleLetterClick (e) {
      // 用于获取被点击的字母
      // console.log(e.target.innerText)
      // 向外触发change事件，并传递参数e.target.innerText，在City.vue中进行事件监听
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // const startY = this.$refs['A'][0].offsetTop
        // 节流限制函数执行的频率
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
        // 如果正在触发事件让其延时16ms再执行，如果同时又触发 则清除上次的任务重新执行最新的任务
        // console.log(index)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
    .list
      display: flex
      flex-direction: column
      justify-content: center
      position absolute
      right: 0
      top: 1.58rem
      bottom: 0
      width: .4rem
      color: $bgColor
      .item
        line-height: .4rem
        text-align: center
</style>
