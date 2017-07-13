import Vue from 'vue'
import Router from 'vue-router'
import Account from '../views/Account'
import Login from '../views/Login'
import Register from '../views/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Account',
      component: Account
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
