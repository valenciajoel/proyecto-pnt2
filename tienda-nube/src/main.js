
import * as bootstrap from 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import {useRouter,createWebHistory} from 'vue-router';
import Productos from './components/Productos.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Contacto from './components/Contacto.vue'

const routes = [
    { path: '/', component: Home},
    { path: '/Login', component: Login},
    { path: '/Contacto', component: Contacto},
    { path: '/Producto', component: Productos},
]

const router = useRouter({
    routes,
    history:createWebHistory()
})

const app = createApp(Home)
.use(router)
.mount('#app')
