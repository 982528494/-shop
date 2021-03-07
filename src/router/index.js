import Vue from 'vue'
import Vuerouter from 'vue-router'
import Home from '@/pages/Home/Home'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Search from '@/pages/Search/Search'
import Login from '@/pages/Login/login'

Vue.use(Vuerouter)

export default new Vuerouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        isShow: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        isShow: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        isShow: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        isShow: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
