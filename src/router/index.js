
// const Account = () => import('../views/user/Account')
// const Login = () => import('../views/user/Login')
// const Register = () => import('../views/user/Register.vue')
// const User = () => import('../views/user/UserBase.vue')
// const Index = () => import('../views/Index.vue')
// const ArticleDetail = () => import('../views/article/ArticleDetail.vue')
// const DesignArticle = () => import('../views/supervisor/DesignArticle.vue')
// const ArticleBase = () => import('../views/article/ArticleBase.vue')
// const SupervisorHome = () => import('../views/supervisor/SupervisorHome.vue')
// const SupervisorBase = () => import('../views/supervisor/SupervisorBase.vue')
// const ArticleManager = () => import('../views/supervisor/ArticleManager.vue')
// const NewArticle = () => import('../views/supervisor/NewArticle.vue')

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
import ArticleManager from '../views/supervisor/ArticleManager.vue'
import NewArticle from '../views/supervisor/NewArticle.vue'

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
        path: 'article/add/:typeId/:articleId',
        name: 'DesignArticle',
        component: DesignArticle
      },
      {
        path: 'articles',
        name: 'ArticleManager',
        component: ArticleManager
      },
      {
        path: 'article/add/types',
        name: 'NewArticle',
        component: NewArticle
      }
    ]
  }
]

export default router
