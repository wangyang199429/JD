import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './views/Login.vue'
// import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    
    {
      path:'/Register',name:'Register',component:()=>import('./views/Register.vue')
    },
    {
      path:'/Login',name:'Login',component:()=>import('./views/Login.vue')
    },
    {
      path:'/index',name:'index',component:()=>import('./views/index.vue')
    },
    {
      path:'/Botnav',name:'botnav',component:()=>import('./views/Botnav.vue'),children:[
        {
          path:'index',
          name:'index',
          component:()=>import ('./views/index.vue')
        },
        {
          path:'search',
          name:'search',
          component:()=>import ('./views/Search.vue')
        },
        {
          path:'list',
          name:'list',
          component:()=>import ('./views/List.vue')
        },
        {
          path:'cart',
          name:'cart',
          //当有这个字段的时候，我们认为他这个路由页面是与登录权限的 
          meta:{requireAuth:true},
          component:()=>import ('./views/Cart.vue')
        },
        {
          path:'mine',
          name:'mine',
          meta:{requireAuth:true},
          component:()=>import ('./views/Mine.vue')
        }
      ]
    }
  ]
})
