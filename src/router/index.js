import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Sneakers from '@/components/Sneakers'
import Sneaker from '@/components/Sneaker'
import Create from '@/components/Create'
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
    },
    {
      path: '/sneakers/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/sneakers/:id',
      name: 'Sneaker',
      component: Sneaker
    }
    
  ]
})
