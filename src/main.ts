import './index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$CA = 'Coming'
app.config.globalProperties.$telegram = 'https://t.me/frodo'
app.config.globalProperties.$twitter = 'https://twitter.com/frodo'
app.config.globalProperties.$buyLink = 'https://www.pump.fun/frodo'
app.config.globalProperties.$telegramDev = 'https://t.me/lettodev'
app.config.globalProperties.$dex = 'https://t.me/lettodev'

app.mount('#app')