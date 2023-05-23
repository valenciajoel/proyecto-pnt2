<template>
    <div class="cart">
      <h2>Carrito de compras</h2>
      <ul>
        <li v-for="product in cartItems" :key="product.id">
          {{ product.name }} - Precio: {{ product.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cartItems() {
        return this.$root.cart;
      },
    },
  };
  </script>
  
  <style scoped>
  .cart {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 20px;
  }
  </style>
  