<template>
  <div>
    <div class="cart-container " v-if="!cartStore.showSummary">
      <div class="products-container row justify-content-start border rounded btn-sm btn-block ">
        <h2>Carrito de compras</h2>
        <ModalsContainer/>
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
  </div>
</template>

<script setup>

import { GoogleSheets } from "../connectionWithGoogle";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store.js";
import {ref} from "vue"
import { useCartStore } from "@/store/carrito";
import { ModalsContainer, useModal } from 'vue-final-modal'
import Modal from '../Modal.vue'
import Login from "./Login.vue";
const { open, close } = useModal({
  component: Modal,
  attrs: {
    title: 'Por favor ingrese sesion',
    onConfirm() {
      close()
    },
  },
  slots: {
    default: Login,
  },
})

const showLoginContent = ref(false);
const cartStore = useCartStore();
const userStore = useAuthStore();
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
  if (!userStore.hayUsuarioLogueado) {
    open()
  } else {
    cartStore.showSummary = true;
  }
}
function getCompra(){
  const compra = {
    usuario: getUser().idUsuario
    ,productos: getProducts()
    ,total: getTotalBudget()
  }
  return JSON.stringify(compra);
}
function finish() {
  console.log(getCompra())
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