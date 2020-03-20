export default {
  changeCity (state, city) {
    state.city = city
    // 希望下次打开页面时存储的是上次选择的值
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
