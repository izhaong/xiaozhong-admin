import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/layout/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login')
    },
    {
      path: '/',
      redirect: '/login'
    },
    // {
    //   path: '/',
    //   name: 'layout',
    //   component: layout,
    //   redirect: '/dashboard',
    //   children: [{
    //     path: 'dashboard',
    //     name: 'dashboard',
    //     component: () => import('@/views/dashboard/index'),
    //     meta: { title: '指标', icon: 'dashboard' }
    //   }]
    // },
    // {
    //   path: '/form',
    //   component: layout,
    //   children: [
    //     {
    //       path: 'index',
    //       name: 'Form',
    //       component: () => import('@/views/form/index'),
    //       meta: { title: 'Form', icon: 'form' }
    //     }
    //   ]
    // },
    { path: '*', name: 'Page404', component: () => import('./views/404') }
  ]
})
