<template>
    <div>
      <h1>Productos</h1>
      <div class="image-container">
        <div v-for="product in displayedProducts" :key="product.id" class="product-column">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <p>{{ product.name }}</p>
          <p>Precio: {{ product.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { products } from "@/products.js";
  import { shuffle } from "lodash";
  
  export default {
    data() {
      return {
        displayedProducts: [],
      };
    },
    created() {
      this.displayedProducts = shuffle(products).slice(0, 9);
    },
  };
  </script>
  
<style scoped>
.image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
}

.product-column {
    width: calc(33.33% - 30px);
    padding: 10px;
    margin-right: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
}

.product-column:nth-child(3n+3) {
    margin-right: 0;
}

.product-image {
    width: 100%;
    max-width: 100%;
    height: auto;
}</style>

