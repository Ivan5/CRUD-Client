import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Sneakers from '@/components/Sneakers'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/sneakers',
      name: 'Sneakers',
      component: Sneakers
    }

  ]
})
