<template>
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <h1>NEW ARRIVALS</h1>
        <div class="filter-buttons">
            <button @click="sortBy = 'price'; sortProducts()">Ordenar por precio</button>
            <button @click="sortBy = 'name'; sortProducts()">Ordenar por nombre</button>
        </div>
        <div class="search-container">
            <input v-show="showSearch" v-model="searchQuery" type="text" placeholder="Buscar por nombre"
                class="search-input" @input="filterProducts" ref="searchInput" />


            <button class="search-button" @click="toggleSearch()">

                <i v-show="!showSearch" class="fa fa-search"></i>
                <i v-show="showSearch" class="fa fa-times"></i>
            </button>
        </div>

        <Cart :cart="cart" @remove-from-cart="removeFromCart" />



        <div class="image-container">
            <div v-for="product in filterProducts" :key="product.id" class="product-column"
                @click="showProductDetails(product)">
                <img :src="product.image" :alt="product.name" class="product-image" />
                <p>{{ product.name }}</p>
                <p>Precio: {{ product.price }}</p>
                <button @click="addToCart(product)">Agregar al carrito</button>
            </div>
        </div>

<!--
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Datos de la empresa</h3>
                    <p>FASHION LAB</p>
                    <p>Avenida del Sol 456</p>
                </div>
                <div class="footer-column">
                    <h3>Contacto</h3>
                    <p>fashionlab@gmail.com</p>
                    <p>+54 9 1152879456</p>
                </div>
                <div class="footer-column">
                    <h3>Social</h3>
                    <p>Síguenos en:</p>
                    <div class="social-icons">
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
                    </div>
                </div>
            </div>
        </footer>
    -->

        <!-- Agregado: Modal de detalle de producto -->
        <div v-if="selectedProduct" class="product-modal">
            <div class="product-details">
                <h2>{{ selectedProduct.name }}</h2>
                <img :src="selectedProduct.image" :alt="selectedProduct.name" />
                <p>Precio: {{ selectedProduct.price }}</p>
                <p>Descripción: {{ selectedProduct.description }}</p>
                <!-- Agregado: Botón para agregar al carrito -->
                <button @click="addToCart(product)">Agregar al carrito</button>
                <button @click="closeProductDetails">Cerrar</button>
            </div>
        </div>




    </div>
</template>
  
<script>
import { useCartStore } from '@/store/cart.js';
import { products } from '@/products.js';
import Cart from './Cart.vue';
import { shuffle } from 'lodash';

export default {
    components: {
        Cart,
    },
    data() {
        return {
            displayedProducts: [],
            searchQuery: "",
            sortBy: "",
            selectedProduct: null, // Agregado: Producto seleccionado para mostrar en detalle
            showSearch: false,
            cart: [] // Agregado: Array para almacenar los productos en el carrito

        };
    },

    created() {
        this.displayedProducts = shuffle(products).slice(0, 9);
        this.sortProducts();
    },
    methods: {
        applyFilterProducts() {
            const query = this.searchQuery.toLowerCase();
            this.filteredProducts = this.displayedProducts.filter((product) =>
                product.name.toLowerCase().includes(query)
            );
        },
        sortProducts() {
            if (this.sortBy === "price") {
                this.displayedProducts.sort((a, b) => a.price - b.price);
            } else if (this.sortBy === "name") {
                this.displayedProducts.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
            }
        },



        toggleSearch() {
            this.showSearch = !this.showSearch;
            if (this.showSearch) {
                this.$nextTick(() => {
                    this.$refs.searchInput.focus();
                });
            } else {
                this.searchQuery = '';
                this.filterProducts();
            }
        },

        addToCart(product) {
            const cartStore = useCartStore();
            cartStore.addToCart(product);
        },
        removeFromCart(item) {
            const cartStore = useCartStore();
            cartStore.removeFromCart(item);
        },
    },
    computed: {
        filterProducts() {
            const query = this.searchQuery.toLowerCase();
            return this.displayedProducts.filter((product) =>
                product.name.toLowerCase().includes(query)
            );
        },
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
/*
.footer {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-around;
}

.footer-column {
    flex-basis: 30%;
}

.footer-column h3 {
    margin-bottom: 10px;
}

.footer-column p {
    margin-bottom: 5px;
}

.social-icons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.social-icons i {
    margin: 0 5px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
}

.footer-column {
    flex-basis: 30%;
}
*/
</style>
