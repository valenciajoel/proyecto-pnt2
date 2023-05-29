<template>
  <div>
    <h2>Carrito de compras</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - {{ item.price }}
        <button @click="removeFromCart(item)">Eliminar</button>
      </li>
    </ul>
    <p>Total de artículos: {{ cartItemsCount }}</p>
  </div>
</template>

<script>

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
  },
};
</script>
