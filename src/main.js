import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// 引入 Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// CSS resets
import 'normalize.css/normalize.css'

// 自适应
import 'lib-flexible'

// 数据模拟
// import './mock/index'

// if (process.env.NODE_ENV !== 'production') {
//   import './mock/index'
// }

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
