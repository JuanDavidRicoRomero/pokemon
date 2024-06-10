import {createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/welcomeView.vue')
    },
    {
        path: '/list',
        name: 'listPokemon',
        component: () => import('../views/ListView.vue')
    },
    {
        path: '/testing',
        name: 'test',
        component: () => import('../components/NoDataFound.vue')
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;