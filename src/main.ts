import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$CA = 'CVkbsGP3d5HSHYSrR6mmPMh4BsT5qK4rQd7h51TUL8mq'
app.config.globalProperties.$telegram = 'https://t.me/catwafhat'
app.config.globalProperties.$twitter = 'https://twitter.com/catwafhat'
app.config.globalProperties.$buyLink = 'https://www.pump.fun/CVkbsGP3d5HSHYSrR6mmPMh4BsT5qK4rQd7h51TUL8mq'

app.use(router)

app.mount('#app')
