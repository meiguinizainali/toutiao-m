import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载vant核心组件库
import Vant from 'vant'
// 加载vant全局样式
import 'vant/lib/index.css'
// 加载全局样式
import './styles/index.less'
// 动态设置rem基准值
import 'lib-flexible'// 自动配置rem 下载引入之后就不用管了
// 注册使用vant组件库
const app = createApp(App)
app
  .use(Vant)
  .use(store)
  .use(router)
  .mount('#app')

// createApp(App).use(Vant).use(store).use(router).mount('#app')
