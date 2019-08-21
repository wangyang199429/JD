import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'
import setaxios from './setaxios'
setaxios()

//无论是刷新还是跳转，首先进入路由守卫
router.beforeEach((to, from, next) =>  {
  store.commit('settoken', localStorage.getItem('token'))
  
  if (to.meta.requireAuth) {//是否为设权限页面
      if (store.state.token) {//权限所需信息是否存在
        //token存在时
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
  }else{
    next()
  }
})
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
