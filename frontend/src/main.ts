import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Message from '@/components/Message/index'
import './assets/iconfont/css/fontawesome.css'
import './assets/iconfont/css/brands.css'
import './assets/iconfont/css/regular.css'
import './assets/iconfont/css/solid.css'
import i18n from '@/i18n/index'
import { setupStore } from '@/store'
import { setHtmlTheme } from '@/utils'

const app = createApp(App)

// 消息弹窗
app.config.globalProperties['$message'] = Message

// 挂载状态管理
setupStore(app)

// Store 准备就绪后处理主题色
setHtmlTheme()

// 语言注册
app.use(i18n)

// 挂载路由
app.use(router)

// 挂载到页面
app.mount('#app')
