<template>
  <div>
    <h1>NEW ARRIVALS</h1>
    <div class="filter-buttons">
      <button
        @click="
          sortBy = 'price';
          sortProducts();
        "
      >
        Ordenar por precio
      </button>
      <button
        @click="
          sortBy = 'name';
          sortProducts();
        "
      >
        Ordenar por nombre
      </button>
    </div>
    <div class="search-container">
      <input
        v-show="showSearch"
        v-model="searchQuery"
        type="text"
        placeholder="Buscar por nombre"
        class="search-input"
        @input="filterProducts"
        ref="searchInput"
      />
      <button class="search-button" @click="toggleSearch()">
        <i v-show="!showSearch" class="fa fa-search"></i>
        <i v-show="showSearch" class="fa fa-times"></i>
      </button>
    </div>

    <div class="image-container">
      <div
        v-for="product in filterProducts"
        :key="product.id"
        class="product-column"
      >
        <img :src="product.image" :alt="product.name" class="product-image" />
        <p>{{ product.name }}</p>
        <p>Precio: {{ product.price }}</p>
        <div class="quantity-selection">
          <button @click="decreaseQuantity(product)">-</button>
          <span>{{ product.cantidad || 0 }}</span>
          <button @click="increaseQuantity(product)">+</button>
        </div>
        <button @click="addToCart(product)">Agregar al carrito</button>
      </div>
    </div>

    <!-- Agregado: Modal de detalle de producto -->
    <div v-if="selectedProduct" class="product-modal">
      <div class="product-details">
        <h2>{{ selectedProduct.name }}</h2>
        <p>Precio: {{ selectedProduct.price }}</p>
        <p>Descripción: {{ selectedProduct.description }}</p>
        <p>Cantidad: {{ selectedProduct.cantidad }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { products } from "@/products.js";
import { shuffle } from "lodash";
import { useCartStore } from "@/store/carrito.js";
import { ref, computed, nextTick } from "vue";

const displayedProducts = ref([]);
displayedProducts.value = shuffle(products);
const searchQuery = ref("");
const sortBy = ref("");
const selectedProduct = ref(null);
const showSearch = ref(false);

const filterProducts = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return displayedProducts.value.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
});

function sortProducts() {
  if (sortBy.value === "price") {
    displayedProducts.value.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === "name") {
    displayedProducts.value.sort((a, b) => a.name.localeCompare(b.name));
  }
}

function toggleSearch() {
  showSearch.value = !showSearch.value;
  if (showSearch.value) {
    nextTick(() => {
      $refs.searchInput.focus();
    });
  } else {
    searchQuery.value = "";
  }
}

function addToCart(product) {
  const cartStore = useCartStore();
  cartStore.addToCart(product);
}

function decreaseQuantity(product) {
  product.cantidad = Math.max(1, (product.cantidad || 0) - 1);
}

function increaseQuantity(product) {
  product.cantidad = Math.min(8, (product.cantidad || 0) + 1);
}





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

.product-column:nth-child(3n + 3) {
  margin-right: 0;
}

.product-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
}

.search-container input[type="text"] {
  width: 0;
  margin-right: 0;
  padding: 0;
  border: none;
  transition: width 0.3s ease;
}

.search-input {
  display: block;
  width: 1000px;
}

.search-container input[type="text"]:focus {
  width: 200px;
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
}

.search-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
}
</style>