import { RouteRecordRaw } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'

// 引入路径
const importPath = {
  [PageEnum.BASE_HOME]: () => import('@/views/dashboard/index.vue')
}

const chartRoutes: RouteRecordRaw = {
  path: PageEnum.BASE_HOME,
  name: PageEnum.BASE_HOME_NAME,
  component: importPath[PageEnum.BASE_HOME],
  meta: {
    title: '首页',
    isRoot: true
  }
}

export default chartRoutes
