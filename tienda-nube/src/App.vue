<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const home = () => {
  router.push('/');
};

const catalogo = () => {
  router.push('/Productos');
};

const contacto = () => {
  router.push('/Contacto')
}

const carrito = () => {
  router.push('/Carrito')
}

const login = () => {
  router.push('/Login');
};

import { ref } from 'vue';
import Login from './components/Login.vue';

const showLoginContent = ref(false);

const openLogin = () => {
  showLoginContent.value = true;
};

const closeLogin = () => {
  showLoginContent.value = false;
};

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click="home">
        <img src="./components/FLAB_Icon.jpg" alt="Logo" width="40" height="20">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"  aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" @click="home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="catalogo" href="#">Catalogo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="contacto" href="#">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="carrito" href="#">Carrito de compras</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="openLogin" href="#" data-bs-toggle="modal"
                data-bs-target="#LoginUser">Acceder</a>
              <!-- Modal -->
              <div class="modal fade" id="LoginUser" tabindex="-1" aria-labelledby="modalLogin" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <!--<h1 class="modal-title fs-5" id="modalLogin">Modal title</h1>-->
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <Login v-if="showLoginContent" @close="closeLogin" />
                    </div>

                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>

  <footer class="footer">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Datos de la empresa</h3>
                    <p>FASHION LAB</p>
                    <p>Avenida del Sol 456</p>
                </div>
                <div class="footer-column">
                    <h3>Contacto</h3>
                    <p>fashionlab@gmail.com</p>
                    <p>+54 9 1152879456</p>
                </div>
                <div class="footer-column">
                    <h3>Social</h3>
                    <p>Síguenos en:</p>
                    <div class="social-icons">
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
                    </div>
                </div>
            </div>
        </footer>
</template>

<style>
/* Estilos adicionales */

.footer {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-around;
}

.footer-column {
    flex-basis: 30%;
}

.footer-column h3 {
    margin-bottom: 10px;
}

.footer-column p {
    margin-bottom: 5px;
}

.social-icons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.social-icons i {
    margin: 0 5px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
}

.footer-column {
    flex-basis: 30%;
}
</style>
