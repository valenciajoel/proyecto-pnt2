<template>
  <div>
    <div class="d-flex align-items-center justify-content-center">
      <h1>Recién llegados</h1>
    </div>
    <div class="d-flex justify-content-between">
      <div class="filter-buttons d-flex align-items-center">
        <button class="btn btn-outline-dark btn-sm btn-block -sm" @click="sortBy = 'price'; sortProducts();">
          Ordenar por precio
        </button>
        <button class="btn btn-outline-dark btn-sm btn-block -sm " @click=" sortBy = 'name'; sortProducts(); ">
          Ordenar por nombre
        </button>
      </div>
      <div class="search-container d-flex align-items-center">
       <input v-show="showSearch" v-model="searchQuery" type="text" placeholder="Buscar por nombre" class="search-input"
    @input="applyFilterProducts" ref="searchInput" />
        <button class="search-button" @click=" toggleSearch() ">
          <i v-show=" !showSearch " class="fa fa-search"></i>
          <i v-show=" showSearch " class="fa fa-times"></i>
        </button>
      </div>
    </div>

    <div class="image-container">
      <div v-for=" product  in  displayedProducts " :key=" product.id " class="product-column">
        <img :src=" product.image " :alt=" product.name " class="product-image" />
        <p>{{ product.name }}</p>
        <div class="price-container">
          <p v-if="product.discount > 0" class="original-price">
            <del>${{ product.price }}</del>
          </p>
          <p v-if="product.discount > 0" class="discounted-price">
            ${{ calcularPrecioDescuento(product) }}
          </p>
          <p v-if="product.discount === 0">
            ${{ product.price }}
          </p>
        </div>
        <div class="quantity-selection">
          <button class="btn btn-outline-dark btn-block m-1" @click=" decreaseQuantity(product) ">-</button>
          <span class="m-1">{{ product.cantidad || 0 }}</span>
          <button class="btn btn-outline-dark btn-block" @click=" increaseQuantity(product) ">+</button>
        </div>
        <button class="btn btn-outline-dark btn-block m-1 m-1" @click=" addToCart(product) ">Agregar al carrito</button>
      </div>
    </div>

    <!-- Agregado: Modal de detalle de producto -->
    <div v-if=" selectedProduct " class="product-modal">
      <div class="product-details">
        <h2>{{ selectedProduct.name }}</h2>
        <p>Precio: {{ selectedProduct.price }}</p>
        <p>Descripción: {{ selectedProduct.description }}</p>
        <p>Cantidad :{{product.cantidad}}</p>

      </div>
    </div>
  </div>
</template>
  
<script setup>
import { products } from "@/products.js";
import Cart from "./Cart.vue";
import { shuffle } from "lodash";
import { useCartStore } from "@/store/carrito.js";
import { ref, nextTick } from "vue"

const displayedProducts = ref([]);
displayedProducts.value = shuffle(products);
const searchQuery = ref("");
const sortBy = ref("");
const selectedProduct = ref(null);
const showSearch = ref(false);
const searchInput = ref(null)

function applyFilterProducts() {
  const query = searchQuery.value.toLowerCase();
  displayedProducts.value = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
}
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
        searchInput.value.focus();
      });
    } else {
      searchQuery.value = "";
      applyFilterProducts();
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

function calcularPrecioDescuento(producto) {
  return producto.price - (producto.price * producto.discount) / 100;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Centra horizontalmente */
  justify-content: center;
  /* Centra verticalmente */
  text-align: center;
  /* Centra el texto */
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

.price-container {
  display: flex;
  justify-content: center; /* Centrar los precios */
  margin-bottom: 10px;
}

.original-price {
  text-decoration: line-through;
  margin-right: 10px;
}


.discounted-price {
  color: red;
}

</style>
