<template>
  <div>
    <h1>Promociones</h1>
    <div class="image-container">
      <div v-for="producto in productosConDescuento" :key="producto.id" class="product-column">
        <img :src="producto.image" :alt="producto.name" class="product-image" />
        <p class="product-name">{{ producto.name }}</p>
        <div class="price-container">
          <p class="original-price">${{ producto.price }}</p>
          <p class="discounted-price">
            ${{ calcularPrecioDescuento(producto) }}
          </p>
        </div>
        <div class="quantity-selection">
          <button class="btn btn-outline-dark btn-block m-1" @click="decreaseQuantity(producto)">-</button>
          <span>{{ producto.cantidad || 0 }}</span>
          <button class="btn btn-outline-dark btn-block m-1" @click="increaseQuantity(producto)">+</button>
        </div>
        
        <button id="agregar-carrito-btn" class="btn btn-outline-dark btn-block" @click="agregarAlCarrito(producto)">Agregar al carrito</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from "@/store/carrito.js";
import { products } from "@/products.js";

const cartStore = useCartStore();
const productosConDescuento = ref(products.filter(producto => producto.discount > 0));

function decreaseQuantity(producto) {
  producto.cantidad = Math.max(1, (producto.cantidad || 0) - 1);
}

function increaseQuantity(producto) {
  producto.cantidad = Math.min(8, (producto.cantidad || 0) + 1);
}
function agregarAlCarrito(producto) {
  cartStore.addToCart(producto);
}

function calcularPrecioDescuento(producto) {
  return producto.price - (producto.price * producto.discount) / 100;
}

</script>

<style scoped>
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.product-column {
  width: calc(33.33% - 30px);
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.product-column:nth-child(3n + 3) {
  margin-right: 0;
}

.product-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.product-name {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center; /* Centrar el nombre del producto */
}

.price-container {
  display: flex;
  justify-content: center; /* Centrar los precios */
  margin-bottom: 10px;
}

.original-price {
  text-decoration: line-through;
  margin-right: 10px;
}

.discounted-price {
  color: red;
}

.quantity-selection {
  display: flex;
  justify-content: center; /* Centrar los botones de sumar/restar */
  align-items: center;
  margin-bottom: 10px;
}

.quantity-selection button {
  margin: 0 5px;
}

#agregar-carrito-btn {
  display: block;
  margin: 0 auto;
}

</style>