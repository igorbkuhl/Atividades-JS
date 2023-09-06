import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/Atividade_JS_1',
            component: () => import('../views/JavaScript/Atividade_JS_1.vue')
        },
        {
            path: '/Atividade_JS_2',
            component: () => import('../views/JavaScript/Atividade_JS_2.vue')
        },
        {
            path: '/Atividade_JS_3',
            component: () => import('../views/JavaScript/Atividade_JS_3.vue')
        },
        {
            path: '/Atividade_JS_4',
            component: () => import('../views/JavaScript/Atividade_JS_4.vue')
        },
        {
            path: '/Atividade_JS_5',
            component: () => import('../views/JavaScript/Atividade_JS_5.vue')
        },
        {
            path: '/Atividade_JS_6',
            component: () => import('../views/JavaScript/Atividade_JS_6.vue')
        },
        {
            path: '/Atividade_JS_7',
            component: () => import('../views/JavaScript/Atividade_JS_7.vue')
        },
        {
            path: '/Atividade_JS_8',
            component: () => import('../views/JavaScript/Atividade_JS_8.vue')
        },
        {
            path: '/Atividade_JS_9',
            component: () => import('../views/JavaScript/Atividade_JS_9.vue')
        },
        {
            path: '/Atividade_JS_10',
            component: () => import('../views/JavaScript/Atividade_JS_10.vue')
        },
        {
            path: '/Atividade_Node_1',
            component: () => import('../views/JavaScript/Atividade_JS_1.vue')
        },
        {
            path: '/Atividade_Node_2',
            component: () => import('../views/JavaScript/Atividade_JS_2.vue')
        },
        {
            path: '/Atividade_Node_3',
            component: () => import('../views/JavaScript/Atividade_JS_3.vue')
        },
        {
            path: '/Atividade_Node_4',
            component: () => import('../views/JavaScript/Atividade_JS_4.vue')
        }
    ]
})

export default router