import './index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$CA = '4inoptdokTnnH5cU64CP64WQbeV6gdFUVmiokPfwzbsL'
app.config.globalProperties.$telegram = 'https://t.me/mihabibi11'
app.config.globalProperties.$twitter = 'https://twitter.com/mihabibi_'
app.config.globalProperties.$buyLink = 'https://raydium.io/swap/?inputCurrency=4inoptdokTnnH5cU64CP64WQbeV6gdFUVmiokPfwzbsL&outputCurrency=sol&outputSymbol=4inopt&fixed=out'
app.config.globalProperties.$telegramDev = 'https://t.me/lettodev'
app.config.globalProperties.$dex = 'https://dexscreener.com/solana/ERCD6qtvn4sWhmNBLyPXfoKghjFRM3gxAYKxNzcw9a5x'
app.config.globalProperties.$raydium = 'https://raydium.io/swap/?inputCurrency=4inoptdokTnnH5cU64CP64WQbeV6gdFUVmiokPfwzbsL&outputCurrency=sol&outputSymbol=4inopt&fixed=out'
app.config.globalProperties.$jupiter = 'https://jup.ag/swap/4inoptdokTnnH5cU64CP64WQbeV6gdFUVmiokPfwzbsL-SOL'
app.config.globalProperties.$dextools = 'https://www.dextools.io/app/en/solana/pair-explorer/ERCD6qtvn4sWhmNBLyPXfoKghjFRM3gxAYKxNzcw9a5x?t=1713314960171'

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