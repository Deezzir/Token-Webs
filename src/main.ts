import './index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$CA = '4inoptdokTnnH5cU64CP64WQbeV6gdFUVmiokPfwzbsL'
app.config.globalProperties.$telegram = 'https://t.me/mihabibi11'
app.config.globalProperties.$twitter = 'https://twitter.com/mihabibi_'
app.config.globalProperties.$buyLink = 'https://pump.fun/4inoptdokTnnH5cU64CP64WQbeV6gdFUVmiokPfwzbsL'
app.config.globalProperties.$telegramDev = 'https://t.me/lettodev'
app.config.globalProperties.$dex = 'Coming'
app.config.globalProperties.$raydium = 'Coming'
app.config.globalProperties.$jupiter = 'Coming'

app.directive('click-outside', {
    beforeMount(el, binding) {
        el.clickOutsideEvent = function (event: any) {
            if (!(el == event.target || el.contains(event.target))) {
                binding.value(event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    },
});


app.mount('#app')