import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$CA = 'Coming'
app.config.globalProperties.$telegram = 'https://t.me/gandalfparty'
app.config.globalProperties.$twitter = 'https://twitter.com/GANDALFPARTY'
app.config.globalProperties.$buyLink = ''

app.use(router)

app.mount('#app')