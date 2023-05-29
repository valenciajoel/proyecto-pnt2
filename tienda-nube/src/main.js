
import * as bootstrap from 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import {createRouter,createWebHistory} from 'vue-router';
import Productos from './components/Productos.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Contacto from './components/Contacto.vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Carrito from './components/Cart.vue'


const routes = [
    { path: '/', component:Home},
    { path: '/Login', component:Login},
    { path: '/Contacto', component:Contacto},
    { path: '/Productos', component:Productos},
    {path: '/Carrito', component:Carrito},
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

const app = createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
