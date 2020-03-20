// 有些浏览器在使用localstorage可能会抛出异常，用try-catch解决
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default { // 存放全局公用的额数据
  // 优先取localStorage.city，没有则取后面的值
  city: defaultCity
}
