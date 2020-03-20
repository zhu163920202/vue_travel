import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

// 使用vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions: { // 存在异步操作时使用
  //   // 参数一：上下文 参数二：dispatch传递的参数
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations
})
