<template>
    <div>
      <button @click="mostratCartelCarrito">Carrito ({{ itemCount }})</button>
      <cartel v-if="mostrarCarrito" @close="cerrarCartelCarrito">
        <h2>Carrito de compras</h2>
<ul>    
    <li v-for="(item, index) in carritoItems" :key="index">
        {{ item.name }} - {{ item.price }} - {{item.talle}}$
    </li>
</ul>
      </cartel>
    </div>
  </template>

  <script setup>
  import { ref, computed } from 'vue';
  import Cartel from './Cartel.vue';
  
      const mostrarCarrito = ref(false);
      const carritoItems = ref([]);
  
      function mostratCartelCarrito() {
        mostrarCarrito.value = true;
      }
  
      function cerrarCartelCarrito() {
        mostrarCarrito.value = false;
      }
  
      const itemCount = computed(() => carritoItems.value.length);
  
  </script>