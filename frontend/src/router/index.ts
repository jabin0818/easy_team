import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'
import modules from '@/router/modules'

// 2. 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    // redirect: PageEnum.BASE_HOME,
    component: () => import('@/layout/index.vue'),
    meta: {
      title: 'Root'
    },
    children: [
      // ...HttpErrorPage,
      modules.dashboardRoutes
      // modules.chartRoutes,
      // modules.previewRoutes,
      // modules.editRoutes
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/index.vue'),
    meta: {
      title: '注册'
    }
  }
]
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 3导出路由   然后去 main.ts 注册 router.ts
export default router
