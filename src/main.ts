import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$CA = 'CA'
app.config.globalProperties.$telegram = 'https://t.me/readovkanews'
app.config.globalProperties.$twitter = 'https://twitter.com/readovkanews'
app.config.globalProperties.$buyLink = 'https://www.pump.fun/board'

app.use(router)

app.mount('#app')
