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
          <button @click="login">Login</button>
        </li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style>
/* Estilos adicionales */
</style>
