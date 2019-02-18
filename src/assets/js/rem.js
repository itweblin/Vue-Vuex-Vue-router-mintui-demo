// rem 适配
getWidth()
window.onresize = function () {
  getWidth()
}
function getWidth () {
  var base = 100
  // 设计稿宽度
  var width = 750
  var pageWidth = document.querySelector('html').offsetWidth
  // var pageWidth = document.documentElement.clientWidth || window.innerWidth
  var fz = (pageWidth * base) / width
  // 设置回html
  document.querySelector('html').style.fontSize = fz + 'px'
}
