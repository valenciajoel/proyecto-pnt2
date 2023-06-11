<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <div>
    <div v-if="!cartStore.showSummary">
      <h2>Carrito de compras</h2>
            <!-- Modal -->
            <a class="nav-link" @click="openLogin" href="#" data-bs-toggle="modal" data-bs-target="#LoginUser">Acceder</a>
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

import { ref } from "vue";
import {Login} from "./Login.vue";

const showLoginContent = ref(false);

const openLogin = () => {
  showLoginContent.value = true;
};

const closeLogin = () => {
  showLoginContent.value = false;
};

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
