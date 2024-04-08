import { createRouter, createWebHistory } from 'vue-router'
import JoinView from '../views/JoinView.vue'
import PartyView from '../views/PartyView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'join',
            component: JoinView
        },
        {
            path: '/party',
            name: 'party',
            component: PartyView
        },
    ]
})

export default router
