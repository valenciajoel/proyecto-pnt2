<template>
  <div>
    <div class="cart-container ">
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
  </div>
</template>

<script setup>

import { GoogleSheets } from "../connectionWithGoogle";
import { useAuthStore } from "@/store.js";
import { useCartStore } from "@/store/carrito";
import { ModalsContainer, useModal } from 'vue-final-modal'
import Modal from '../Modal.vue'
import Login from "./Login.vue";
import Resume from "./Resume.vue";

const cartStore = useCartStore();
const userStore = useAuthStore();
const cart = cartStore.cart;

//Muestra el cartel de inicio de sesion
async function openModal (title,comp) {
  const {open,close} = useModal({
    component: Modal,
  attrs: {
    title: title,
    onConfirm() {
      close()
    },
  },
  slots: {
    default: comp,
  },
  })
  open()
}

//Muestra el cartel de resumen
async function openResume () {
  const {open,close} = useModal({
    component: Resume,
  attrs: {
    title: "Gracias por su compra",
    total: getTotalBudget(),
    carrito: getProducts(),
    onConfirm() {
      close()
    },
  },
  slots: {
  },
  })
  open()
}


//Remueve del carrito
function removeFromCart(item) {
  cartStore.removeFromCart(item);
}

//Obtiene el total 
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

// Obtiene los productos del carrito

function getProducts() {
  let products = [];
  for (const item of cartStore.cart) {
    let product = { id: item.id, cantidad: item.cantidad, name: item.name, price: item.price };
    products.push(product);
  }
    // Devuelve el array de productos

  return products;
}

// Obtiene los datos del usuario logueado
function getUser() {
  const proxyObject = userStore.usuario;
  const jsonObject = JSON.parse(JSON.stringify(proxyObject));
  return jsonObject;
}

// Realiza el proceso de checkout
function checkout() {
    // Verifica si hay un usuario logueado
  if (!userStore.hayUsuarioLogueado) {
    openModal("Por favor inicie sesion", Login)
        // Verifica si el total del presupuesto es cero

  }else if(getTotalBudget() == 0){
    openModal("Error", "<p>Por favor ingrese articulos para poder continuar</p>")
  }else {
    finish()
  }
}

// Crea un objeto compra con los datos necesarios
function getCompra(){
  const compra = {
    usuario: getUser().idUsuario
    ,productos: getProducts()
    ,total: getTotalBudget()
  }
  return compra;
}

// Finaliza el proceso de compra
function finish() {
  GoogleSheets.enviarCompra(getCompra())
  openResume()
  cartStore.clearCart()
  
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