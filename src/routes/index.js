import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/manga',
        name: 'Manga',
        component: () => import('../views/Manga.vue')
    },
    {
        path: '/character',
        name: 'Character',
        component: () => import('../views/Characters.vue')
    },
    {
        path: '/people',
        name: 'People',
        component: () => import('../views/People.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router