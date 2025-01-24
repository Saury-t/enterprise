import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '@/views/IndexPage.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: IndexPage
},
{
    path: '/about',
    name: 'about',
    component: () =>
        import('../views/AboutUs.vue')
},
{
    path: '/product',
    name: 'product',
    component: () =>
        import('../views/Product.vue')
},
{
    path: '/contact',
    name: 'contact',
    component: () =>
        import('../views/ContactUs.vue')
}
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router