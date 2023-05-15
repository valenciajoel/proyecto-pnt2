
import * as bootstrap from 'bootstrap';

import { createApp } from 'vue';
import {useRouter,createWebHistory} from 'vue-router';
import Produtos from './components/Productos.vue'
import Login from './components/Login.vue'
import Home from './App.vue'
import Contacto from './components/Contacto.vue'

const routes = [
    { path: '/', component: Home},
    { path: '/Login', component: Login},
    { path: '/Contacto', component: Contacto},
    { path: '/Producto', component: Producto},
]

const router = useRouter({
    routes,
    history:createWebHistory()
})

const app = createApp(Home)
.use(router)
.mount('#app')
