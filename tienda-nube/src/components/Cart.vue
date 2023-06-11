<template>
  <div>
    <div class="cart-container " v-if="!cartStore.showSummary">
      <div class="products-container row justify-content-start border rounded btn-sm btn-block ">
        <h2>Carrito de compras</h2>
        <table >
          <thead>
            <tr class="border-bottom">
             <th class="column-header">Nombre</th>
              <th class="column-header">Precio</th>
               <th class="column-header">Cantidad</th>
              <th class="column-header">Subtotal</th>
            </tr>
          </thead>
          <tbody  >
            <tr class="border-bottom" v-for="item in cart" :key="item.id">
              <td class="column-header ">{{ item.name }}</td>
              <td class="column-header">${{ item.price }}</td>
              <td class="column-header">{{ item.cantidad }}</td>
              <td class="column-header">${{ item.cantidad * item.price }}</td>
              <td >
                <button class="border rounded"  @click="removeFromCart(item)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="summary-container text-center border rounded  btn-block">
        <div class="summary ">
          <h3 class="mb-5">Resumen de compra</h3>
          <p class="mb-5">Total: ${{ getTotalBudget() }}</p>
          <button class="mb-5 border rounded" @click="checkout">Finalizar compra</button>
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
    <div>
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
const cartStore = useCartStore();
const userStore = useAuthStore();
const store = useAuthStore();
const cart = cartStore.cart;
const cartItemsCount = cartStore.cartItemsCount;//No se Usa


const openLogin = () => {
  showLoginContent.value = true;
};

const closeLogin = () => {
  showLoginContent.value = false;
};


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
  max-width: 900px;
  margin: 0 auto;
  padding-block-end:270px ;
  padding-top: 10px;
}

.products-container {
  width: 60%;
  padding-top: 8px;
  padding-right: 10px;
}

.summary-container {
  width: 40%;
  padding-top: 10px;
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