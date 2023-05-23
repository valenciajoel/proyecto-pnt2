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
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Mi sitio web</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <button @click="home">Home</button>
        </li>
        <li class="nav-item">
          <button @click="catalogo">Catalogo</button>
        </li>
        <li class="nav-item">
          <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginUser" @click="openLogin">
  Acceder
</button>

<!-- Modal -->
<div class="modal fade" id="LoginUser" tabindex="-1" aria-labelledby="modalLogin" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="modalLogin">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <Login v-if="showLoginContent" @close="closeLogin"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style>
/* Estilos adicionales */
</style>
