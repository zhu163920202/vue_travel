<template>
<!-- 用于实现渐隐渐现的动画效果 -->
  <div>
    <transition>
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Fade'
}
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to
  opacity: 0
.v-enter-active, .v-leave-active
  transition: opacity .5s
</style>
