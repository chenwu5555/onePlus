import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect: '/login',
    },
    {
        path: '/login',
        name:'login',
        component: resolve => require(['../views/login.vue'], resolve)
    },
    {
        path: '/home',
        name:'home',
        component: resolve => require(['../views/home.vue'], resolve)
    }
]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})
export default router