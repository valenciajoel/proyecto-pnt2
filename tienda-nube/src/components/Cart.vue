<template>
  <div>
    <button @click="mostratCartelCarrito">Carrito ({{ itemCount }})</button>
    <cartel v-if="mostrarCarrito" @close="cerrarCartelCarrito">
      <h2>Carrito de compras</h2>
      <ul>
        <li v-for="(item, index) in carritoItems" :key="index">
          {{ item.name }} - {{ item.price }} - {{ item.talle }}$
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

const itemCount = computed(() => carritoItems.value.length);

const removeFromCart = (selectedProduct) => {
  // Emit the event to remove from cart
  emit('remove-from-cart', selectedProduct);
};

const mostratCartelCarrito = () => {
  mostrarCarrito.value = true;
};

const cerrarCartelCarrito = () => {
  mostrarCarrito.value = false;
};
</script>

<style scoped>
.cart {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
}
</style>
