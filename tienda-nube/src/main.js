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
import Administrador from './components/Administrador.vue';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Promocion from './components/Promocion.vue';

const routes = [
    { path: '/', component:Home},
    { path: '/Login', component:Login},
    { path: '/Contacto', component:Contacto},
    { path: '/Productos', component:Productos},
    {path: '/Carrito', component:Carrito},
    { path: '/Administrador', component: Administrador},
    { path: '/Promocion', component: Promocion},
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

const app = createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
