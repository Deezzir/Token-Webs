import './index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$CA = 'Coming'
app.config.globalProperties.$telegram = 'https://t.me/frodo'
app.config.globalProperties.$twitter = 'https://twitter.com/FRODOTHEFROGDOG'
app.config.globalProperties.$buyLink = 'https://www.pump.fun/'
app.config.globalProperties.$telegramDev = 'https://t.me/lettodev'
app.config.globalProperties.$dex = 'https://dexscreener.com/solana/'

app.mount('#app')