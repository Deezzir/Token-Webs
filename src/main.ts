import './index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$CA = 'Coming'
app.config.globalProperties.$telegram = 'https://t.me/thevault_boy'
app.config.globalProperties.$twitter = 'https://twitter.com/VAULTBOYI'
app.config.globalProperties.$buyLink = 'Coming'
app.config.globalProperties.$telegramDev = 'https://t.me/lettodev'
app.config.globalProperties.$dex = 'Coming'
app.config.globalProperties.$raydium = 'Coming'

app.mount('#app')