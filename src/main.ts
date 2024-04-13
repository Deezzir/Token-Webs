import './index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$CA = '7rwHQ8qykg4AjP6Tv5Xo6HPUVdug2gA2LcK9y8wWHU22'
app.config.globalProperties.$telegram = 'https://t.me/thevault_boy'
app.config.globalProperties.$twitter = 'https://twitter.com/VAULTBOYI'
app.config.globalProperties.$buyLink = 'https://www.pump.fun/7rwHQ8qykg4AjP6Tv5Xo6HPUVdug2gA2LcK9y8wWHU22'
app.config.globalProperties.$telegramDev = 'https://t.me/lettodev'
app.config.globalProperties.$dex = 'Coming'
app.config.globalProperties.$raydium = 'Coming'

app.mount('#app')