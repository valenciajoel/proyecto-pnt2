<template>
  <div>
    <div v-if="!cartStore.showSummary">
      <h2>Carrito de compras</h2>
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
    </div>
  </div>
</template>

<script>
import { GoogleSheets } from "../connectionWithGoogle";
import { useAuthStore } from "@/store.js";
import { useCartStore } from "@/store/carrito";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      cartStore: useCartStore(),
      userStore: useAuthStore(),
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
        products.push(product);
      }
      return products;
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

      if (store.hayUsuarioLogueado && this.getTotalBudget() > 0) {
        compra = {
          items: [...cartStore.cart],
          total: cartStore.getTotalBudget(),
          fecha: new Date(),
        };
        cartStore.showSummary = true;
        store.agregarCompraHistorial(compra);
      } else {
        // Redirige al usuario a la vista de inicio de sesión
              this.$router.push("/Login");

       
      }
    },
  },
};
</script>
