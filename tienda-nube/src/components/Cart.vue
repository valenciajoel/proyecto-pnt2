<template>
  <div>
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
  </div>

  <button @click="checkout">Finalizar compra</button>

  <div v-if="this.cartStore.showSummary">
    <h1>Compra realizada con exito!</h1>
    <h2>Resumen de compra</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - ${{ item.price }} - Cantidad: {{ item.cantidad }} -
        Total: ${{ item.cantidad * item.price }}
      </li>
    </ul>
    <p>Total compra: {{ getTotalBudget() }}</p>
  </div>
</template>

<script>
import { useCartStore } from "@/store/carrito";

export default {
  data() {
    return {
      cartStore: useCartStore(),
    };
  },
  computed: {
    cart() {
      return this.cartStore.cart;
    },
    cartItemsCount() {
      return this.cartStore.cartItemsCount;
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
    checkout() {
      this.cartStore.showSummary = true;
      this.cartStore.clearCart();
    },
  },
};
</script>
