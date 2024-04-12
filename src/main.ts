import './index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$CA = 'Coming'
app.config.globalProperties.$telegram = 'Coming'
app.config.globalProperties.$twitter = 'Coming'
app.config.globalProperties.$buyLink = 'Coming'
app.config.globalProperties.$telegramDev = 'Coming'
app.config.globalProperties.$dex = 'Coming'
app.config.globalProperties.$raydium = 'Coming'

app.mount('#app')