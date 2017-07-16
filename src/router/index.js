
import Account from '../views/Account'
import Login from '../views/Login'
import Register from '../views/Register.vue'

const router = [
  {
    path: '/',
    name: 'Account',
    component: Account
  },
  {
    path: '/account',
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

export default router
