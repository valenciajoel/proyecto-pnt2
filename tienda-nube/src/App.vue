<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const home = () => {
  router.push('/');
};

const catalogo = () => {
  router.push('/Producto');
};

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
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./components/FLAB_Icon.jpg" alt="Logo" width="120" height="60" class="d-inline-block align-text-top">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#" @click="home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="catalogo" href="#">Catalogo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="openLogin" href="#" data-bs-toggle="modal" data-bs-target="#LoginUser">Acceder</a>
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
  </nav>
  
  <router-view></router-view>
</template>

<style>
/* Estilos adicionales */
</style>
