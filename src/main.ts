import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$CA = 'Coming'
app.config.globalProperties.$telegram = 'https://t.me/catwafhat'
app.config.globalProperties.$twitter = 'https://twitter.com/catwafhat'
app.config.globalProperties.$buyLink = 'https://www.pump.fun/board'

app.use(router)

app.mount('#app')
