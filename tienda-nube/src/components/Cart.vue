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
</script>
