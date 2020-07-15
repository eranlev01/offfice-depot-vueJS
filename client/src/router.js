import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main.vue'
import Product from './components/Product.vue'
import Contact from './components/Contact.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/product/*',
            name: 'product',
            component: Product
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
});