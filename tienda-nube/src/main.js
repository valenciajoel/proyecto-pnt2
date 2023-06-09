import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Productos from './components/Productos.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Contacto from './components/Contacto.vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Carrito from './components/Cart.vue'
import Administrador from './components/Administrador.vue';
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import Promocion from './components/Promocion.vue';
// Definir las rutas de la aplicación
const routes = [
    { path: '/', component: Home },
    { path: '/Login', component: Login },
    { path: '/Contacto', component: Contacto },
    { path: '/Productos', component: Productos },
    { path: '/Carrito', component: Carrito },
    { path: '/Administrador', component: Administrador },
    { path: '/Promocion', component: Promocion },
]
// Crear el enrutador de la aplicación
const router = createRouter({
    routes,
    history: createWebHistory()
})
// Crear la instancia de vue-final-modal
const vfm = createVfm()
// Crear la instancia de la aplicación Vue
const app = createApp(App)
    .component('Login', Login)
    .use(router)
    .use(vfm)
    .use(createPinia())
    .mount('#app')
