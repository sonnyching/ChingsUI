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

// import Account from '../views/user/Account'
// import Login from '../views/user/Login'
// import Register from '../views/user/Register.vue'
// import User from '../views/user/UserBase.vue'
// import Index from '../views/Index.vue'
// import ArticleDetail from '../views/article/ArticleDetail.vue'
// import DesignArticle from '../views/supervisor/DesignArticle.vue'
// import ArticleBase from '../views/article/ArticleBase.vue'
// import SupervisorHome from '../views/supervisor/SupervisorHome.vue'
// import SupervisorBase from '../views/supervisor/SupervisorBase.vue'
// import ArticleManager from '../views/supervisor/ArticleManager.vue'
// import NewArticle from '../views/supervisor/NewArticle.vue'

const router = [
  {
    path: '/',
    name: 'Index',
    component: resolve => require(['../views/Index.vue'], resolve)
    // component: Index
  },
  { path: '/user',
    // component: User,
    component: resolve => require(['../views/user/UserBase.vue'], resolve),
    children: [
      {
        path: 'account',
        name: 'Account',
        // component: Account
        component: resolve => require(['../views/user/Account'], resolve)
      },
      {
        path: 'login',
        name: 'Login',
        component: resolve => require(['../views/user/Login'], resolve)
        // component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: resolve => require(['../views/user/Register'], resolve)
        // component: Register
      }
    ]
  },
  { path: '/article',
    // component: ArticleBase,
    component: resolve => require(['../views/article/ArticleBase.vue'], resolve),
    children: [
      {
        path: 'detail/:id',
        name: 'ArticleDetail',
        // component: ArticleDetail
        component: resolve => require(['../views/article/ArticleDetail.vue'], resolve)
      }
    ]
  },
  { path: '/supervisor',
    // component: SupervisorBase,
    component: resolve => require(['../views/supervisor/SupervisorBase.vue'], resolve),
    children: [
      {
        path: 'home',
        name: 'SupervisorHome',
        // component: SupervisorHome
        component: resolve => require(['../views/supervisor/SupervisorHome.vue'], resolve)
      },
      {
        path: 'article/add/:typeId/:articleId',
        name: 'DesignArticle',
        // component: DesignArticle
        component: resolve => require(['../views/supervisor/DesignArticle.vue'], resolve)
      },
      {
        path: 'articles',
        name: 'ArticleManager',
        // component: ArticleManager
        component: resolve => require(['../views/supervisor/ArticleManager.vue'], resolve)
      },
      {
        path: 'article/add/types',
        name: 'NewArticle',
        component: resolve => require(['../views/supervisor/NewArticle.vue'], resolve)
        // component: NewArticle
      }
    ]
  }
]

export default router
