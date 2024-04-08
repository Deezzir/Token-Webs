import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$CA = 'Ezz6s3KGxbyxDuWxU8Tbbx8EfrNXuUnoYySx5YFfpDRC'
app.config.globalProperties.$telegram = 'https://t.me/gandalfparty'
app.config.globalProperties.$twitter = 'https://twitter.com/GANDALFPARTY'
app.config.globalProperties.$buyLink = 'https://www.pump.fun/Ezz6s3KGxbyxDuWxU8Tbbx8EfrNXuUnoYySx5YFfpDRC'

app.use(router)

app.mount('#app')