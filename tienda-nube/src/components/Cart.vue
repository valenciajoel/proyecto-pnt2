<template>
  <div>
    <div v-if="!cartStore.showSummary">
      <h2>Carrito de compras</h2>
      <div v-if="!userStore.hayUsuarioLogueado">
        <p>Por favor, inicia sesión para realizar la compra.</p>
      </div>

      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }} - Cantidad: {{ item.cantidad }} -
          Total : ${{ item.cantidad * item.price }}
          <br />
          <button @click="removeFromCart(item)">Eliminar</button>
        </li>
      </ul>
      <p>Total de artículos: {{ cartItemsCount }}</p>
      <p>Presupuesto total: {{ getTotalBudget() }}</p>

      <button @click="checkout">Finalizar compra</button>
    </div>
    <div v-if="cartStore.showSummary">
      <h1>Compra realizada con éxito!</h1>
      <h2>Resumen de compra</h2>

      <p>Total compra: {{ getTotalBudget() }}</p>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }} - Cantidad: {{ item.cantidad }} -
          Total: ${{ item.cantidad * item.price }}
        </li>
      </ul>
      <button @click="finish">REINICIAR</button>

      <!-- Agregado: Mensaje de inicio de sesión requerido -->
    </div>
  </div>
</template>

<script setup>
import { GoogleSheets } from "../connectionWithGoogle";
import { useAuthStore } from "@/store.js";
import { useCartStore } from "@/store/carrito";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const userStore = useAuthStore();

const cart = cartStore.cart;
const cartItemsCount = cartStore.cartItemsCount;
const user = userStore.usuario;

function removeFromCart(item) {
  cartStore.removeFromCart(item);
}

function getTotalBudget() {
  let total = 0;
  for (const item of cartStore.cart) {
    const cantidad = parseFloat(item.cantidad);
    const price = parseFloat(item.price);
    if (!isNaN(cantidad) && !isNaN(price)) {
      total += cantidad * price;
    }
  }
  return "$" + total;
}

function getProducts() {
  let products = [];
  for (const item of cartStore.cart) {
    let product = { id: item.id, cantidad: item.cantidad };
    products.push(product);
  }
  return products;
}

function getUser() {
  const proxyObject = userStore.usuario;
  const jsonObject = JSON.parse(JSON.stringify(proxyObject));
  return jsonObject;
}

function checkout() {
  cartStore.showSummary = true;
}

function finish() {
  cartStore.clearCart();
  cartStore.showSummary = false;
}
</script>
