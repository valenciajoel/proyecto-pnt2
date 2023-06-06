<template>
  <div>
    <div class="cart-container" v-if="!cartStore.showSummary">
      <div class="products-container">
        <h2>Carrito de compras</h2>
        <table>
          <thead>
            <tr>
              <th class="column-header">Precio</th>
              <th class="column-header">Cantidad</th>
              <th class="column-header">Subtotal</th>
              <th class="column-header">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td>{{ item.name }}</td>
              <td>${{ item.price }}</td>
              <td>{{ item.cantidad }}</td>
              <td>${{ item.cantidad * item.price }}</td>
              <td>
                <button @click="removeFromCart(item)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="summary-container">
        <div class="summary">
          <h3>Resumen de compra</h3>
          <p>Total: ${{ getTotalBudget() }}</p>
          <button @click="checkout">Finalizar compra</button>
        </div>
        <div v-if="!store.hayUsuarioLogueado && showLoginContent" class="login-container">
          <p>Debes iniciar sesión para finalizar la compra.</p>
          <button class="btn btn-primary" @click="openLogin" href="#" data-bs-toggle="modal"
            data-bs-target="#LoginUser">Acceder</button>
        </div>
      </div>
    </div>

    <div v-if="cartStore.showSummary">
      <div class="summary-container">
        <h1>Compra realizada con éxito!</h1>
        <h2>Resumen de compra</h2>

        <p>Total compra: ${{ getTotalBudget() }}</p>
        <ul>
          <li v-for="item in cart" :key="item.id">
            {{ item.name }} - ${{ item.price }} - Cantidad: {{ item.cantidad }} - Total: ${{ item.cantidad * item.price }}
          </li>
        </ul>
        <button @click="finish">REINICIAR</button>
      </div>
    </div>

    <!-- Mensaje de inicio de sesión requerido -->
    <div v-if="!store.hayUsuarioLogueado && showLoginContent">
      <p>Debes iniciar sesión para finalizar la compra.</p>
      <button class="btn btn-primary" @click="openLogin" href="#" data-bs-toggle="modal"
        data-bs-target="#LoginUser">Acceder</button>

      <!-- Modal -->
      <div class="modal fade" id="LoginUser" tabindex="-1" aria-labelledby="modalLogin" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Login v-if="showLoginContent" @close="closeLogin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GoogleSheets } from "../connectionWithGoogle";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store.js";
import { useCartStore } from "@/store/carrito";
import Login from "./Login.vue";
import { ref } from "vue";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const showLoginContent = ref(false);

const openLogin = () => {
  showLoginContent.value = true;
};

const closeLogin = () => {
  showLoginContent.value = false;
};

const cartStore = useCartStore();
const userStore = useAuthStore();
const store = useAuthStore();

const cart = cartStore.cart;
const cartItemsCount = cartStore.cartItemsCount;

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
  return total;
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
  if (store.hayUsuarioLogueado) {
    cartStore.showSummary = true;
  } else {
    openLogin();
  }

}

function finish() {
  cartStore.clearCart();
  cartStore.showSummary = false;
}
</script>

<style scoped>
.cart-container {
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
}

.products-container {
  width: 50%;
}

.summary-container {
  width: 40%;
  background-color: #fbf8f8;
  padding: 20px;
}

.summary {
  margin-bottom: 20px;
}

.login-container {
  text-align: center;
  margin-top: 20px;
}

button {
  margin-top: 10px;
}

.column-header {
  padding: 10px 20px; /* Ajusta el espaciado según tus preferencias */
}
</style>