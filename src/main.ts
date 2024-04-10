import './index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$CA = 'DA4EQzj6GHgAS7i9ffia1c35NyHqqrnHdfp9A55HZuVq'
app.config.globalProperties.$telegram = 'https://t.me/frodo_frogdog'
app.config.globalProperties.$twitter = 'https://twitter.com/FRODOTHEFROGDOG'
app.config.globalProperties.$buyLink = 'https://jup.ag/swap/DA4EQzj6GHgAS7i9ffia1c35NyHqqrnHdfp9A55HZuVq-SOL'
app.config.globalProperties.$telegramDev = 'https://t.me/lettodev'
app.config.globalProperties.$dex = 'https://dexscreener.com/solana/2xCGqSn86Y2Ziba7sR6Nd2G5HqaYtFfL5NhpvwsyKc9R'
app.config.globalProperties.$raydium = 'https://raydium.io/swap/?inputCurrency=DA4EQzj6GHgAS7i9ffia1c35NyHqqrnHdfp9A55HZuVq&outputCurrency=sol&fixed=in'

app.mount('#app')