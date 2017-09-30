
const Account = () => import('../views/user/Account')
const Login = () => import('../views/user/Login')
const Register = () => import('../views/user/Register.vue')
const User = () => import('../views/user/UserBase.vue')
const Index = () => import('../views/Index.vue')
const ArticleDetail = () => import('../views/article/ArticleDetail.vue')
const DesignArticle = () => import('../views/supervisor/DesignArticle.vue')
const ArticleBase = () => import('../views/article/ArticleBase.vue')
const SupervisorHome = () => import('../views/supervisor/SupervisorHome.vue')
const SupervisorBase = () => import('../views/supervisor/SupervisorBase.vue')
const ArticleManager = () => import('../views/supervisor/ArticleManager.vue')
const NewArticle = () => import('../views/supervisor/NewArticle.vue')

// const Foo = () =>import('../views/supervisor/SupervisorBase.vue')

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
