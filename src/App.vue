<template>
  <div id="app">
    <!-- <router-view/> 显示的是当前路由地址所对应的内容-->
    <!-- keep-alive 路由中的内容被加载过一次后就把路由中的内容存放到内存中
    下次再请求这个路由时不需要重新渲染这个 组件去 重新执行钩子函数
    直接从内从中加载数据，不需要再次发送ajax请求
    同时会多出一个生命周期函数activated -->
    <!-- Detail 页面不会被缓存，每次mounted都会被执行 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
