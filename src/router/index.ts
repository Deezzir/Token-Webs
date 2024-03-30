import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/buy',
            name: 'buy',
            component: () => import('../views/BuyView.vue')
        },
        {
            path: '/chart',
            name: 'chart',
            component: () => import('../views/ChartView.vue')
        },
        {
            path: '/:catchAll(.*)*',
            name: 'not-found',
            component: () => import('../views/NotFoundView.vue')
        }
    ]
})

export default router
