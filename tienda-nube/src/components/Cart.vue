<template>
  <div>
    <h2>Carrito de compras</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} -  ${{ item.price }} - Cantidad: {{ item.cantidad }} -
        Total : ${{ item.cantidad * item.price }}
        <br />
        <button @click="removeFromCart(item)">Eliminar</button>
      </li>
    </ul>
    <p>Total de artículos: {{ cartItemsCount }}</p>
    <p>Presupuesto total: {{ getTotalBudget() }}</p>
  </div>
</template>

<script>
import { useCartStore } from "@/store/carrito";

export default {
  computed: {
    cart() {
      const cartStore = useCartStore();
      return cartStore.cart;
    },
    cartItemsCount() {
      const cartStore = useCartStore();
      return cartStore.cartItemsCount;
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
  },
};
</script>
