
import Account from '../views/user/Account'
import Login from '../views/user/Login'
import Register from '../views/user/Register.vue'
import User from '../views/user/UserBase.vue'
import Index from '../views/Index.vue'
import ArticleDetail from '../views/article/ArticleDetail.vue'
import DesignArticle from '../views/supervisor/DesignArticle.vue'
import ArticleBase from '../views/article/ArticleBase.vue'
import SupervisorHome from '../views/supervisor/SupervisorHome.vue'
import SupervisorBase from '../views/supervisor/SupervisorBase.vue'

// import App from '../App.vue'

const router = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  { path: '/user',
    component: User,
    children: [
      {
        path: 'account',
        name: 'Account',
        component: Account
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      }
    ]
  },
  { path: '/article',
    component: ArticleBase,
    children: [
      {
        path: 'detail/:id',
        name: 'ArticleDetail',
        component: ArticleDetail
      }
    ]
  },
  { path: '/supervisor',
    component: SupervisorBase,
    children: [
      {
        path: 'home',
        name: 'SupervisorHome',
        component: SupervisorHome
      },
      {
        path: 'addArticle',
        name: 'DesignArticle',
        component: DesignArticle
      }
    ]
  }
]

export default router
