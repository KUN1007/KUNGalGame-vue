// core
import { createApp } from 'vue'
// APP
import App from './App.vue'
/* 引入 vue-router */
import router from './router'
// 引入 css 动画
import 'animate.css'
// 引入 i18n
import i18n from '@/language/i18n'
// 引入路由守卫
import { setupRouterGuard } from '@/router/guard'
// 引入 Pinia
import { setupPinia } from '@/store/index'
// 引入样式
import '@/styles/index.scss'

// 获取 App 实例
const app = createApp(App)

// 使用路由守卫
setupRouterGuard(router)
// 使用 pinia
setupPinia(app)

app.use(router).use(i18n).mount('#app')
