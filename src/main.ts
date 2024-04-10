import './index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$CA = 'DA4EQzj6GHgAS7i9ffia1c35NyHqqrnHdfp9A55HZuVq'
app.config.globalProperties.$telegram = 'https://t.me/frodo_frogdog'
app.config.globalProperties.$twitter = 'https://twitter.com/FRODOTHEFROGDOG'
app.config.globalProperties.$buyLink = 'https://pump.fun/DA4EQzj6GHgAS7i9ffia1c35NyHqqrnHdfp9A55HZuVq'
app.config.globalProperties.$telegramDev = 'https://t.me/lettodev'
app.config.globalProperties.$dex = 'https://dexscreener.com/solana/DA4EQzj6GHgAS7i9ffia1c35NyHqqrnHdfp9A55HZuVq'

app.mount('#app')