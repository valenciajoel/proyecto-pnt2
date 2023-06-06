
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
      <h1>Compra realizada con exito!</h1>
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

<script>

import { GoogleSheets } from "../connectionWithGoogle";
import { useAuthStore } from "@/store.js";
import { useCartStore } from "@/store/carrito";
import { useRouter } from "vue-router";
import Login from "./Login.vue";
export default {
  data() {
    return {
      cartStore: useCartStore(),
      userStore: useAuthStore(),
      showLoginContent: false,
    };
  },
  computed: {
    cart() {
      return this.cartStore.cart;
    },
    cartItemsCount() {
      return this.cartStore.cartItemsCount;
    },
    user() {
      return this.userStore.usuario;
    },
  },
  methods: {
    removeFromCart(item) {
      const cartStore = useCartStore();
      cartStore.removeFromCart(item);
    },
    getTotalBudget() {
      const cartStore = useCartStore();
      let total = 0;
      for (const item of cartStore.cart) {
        const cantidad = parseFloat(item.cantidad);
        const price = parseFloat(item.price);
        if (!isNaN(cantidad) && !isNaN(price)) {
          total += cantidad * price;
        }
      }
      return "$" + total;
    },
    getProducts() {
      const cartStore = useCartStore();
      let products = [];
      for (const item of cartStore.cart) {
        let product = { id: item.id, cantidad: item.cantidad };
        let products = [];
        for (const item of cartStore.cart) {
          let product = { id: item.id, cantidad: item.cantidad, };
          products.push(product);
        }
        return products;
      }
    },
    getUser() {
      const userStore = useAuthStore();
      const proxyObject = userStore.usuario;
      const jsonObject = JSON.parse(JSON.stringify(proxyObject));
      return jsonObject;
    },
    checkout() {
      let compra = null;
      const store = useAuthStore();
      const cartStore = useCartStore();
      const router = useRouter();

      if (store.hayUsuarioLogueado) {
        /*          compra = {
          items: [...cartStore.cart],
          total: cartStore.getTotalBudget(),
          fecha: new Date(),
        };  
 */
        //store.agregarCompraHistorial(compra);
        cartStore.showSummary = true;
      } else {
        
      }
    },

    finish() {
      let compra = {
        productos: this.getProducts(),
        usuario: this.getUser(),
        total: this.getTotalBudget(),
      };
      console.log(compra);
      GoogleSheets.enviarCompra(compra);
      this.cartStore.clearCart();
      this.cartStore.showSummary = false;
    },openLogin() {
      this.showLoginContent = true;
    },
    closeLogin() {
      this.showLoginContent = false;
    },
  }
}
</script>
