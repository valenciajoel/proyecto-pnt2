<template>
    <div>
        <h1>Productos</h1>
        <div class="filter-buttons">
            <button @click="sortBy = 'price'; sortProducts()">Ordenar por precio</button>
            <button @click="sortBy = 'name'; sortProducts()">Ordenar por nombre</button>
            <button @click="sortBy = ''; sortProducts()">Sin orden</button>
        </div>
        <div class="search-container">
            <input v-model="searchQuery" type="text" placeholder="Buscar producto por nombre" class="search-input"
                @input="filterProducts" />
            <button class="search-button" @click="filterProducts"><i class="fas fa-search"></i></button>
        </div>
        <div class="image-container">
            <div v-for="product in filteredProducts" :key="product.id" class="product-column">
                <img :src="product.image" :alt="product.name" class="product-image" />
                <p>{{ product.name }}</p>
                <p>Precio: {{ product.price }}</p>
            </div>
        </div>
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Datos de la empresa</h3>
                    <p>Nombre de la empresa</p>
                    <p>Dirección de la empresa</p>
                    <p>Teléfono de contacto</p>
                </div>
                <div class="footer-column">
                    <h3>Contacto</h3>
                    <p>Email de contacto</p>
                    <p>Teléfono de contacto</p>
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
    </div>
</template>
  
<script>
import { products } from "@/products.js";
import { shuffle } from "lodash";

export default {
    data() {
        return {
            displayedProducts: [],
            searchQuery: "",
            sortBy: "",
        };
    },
    created() {
        this.displayedProducts = shuffle(products).slice(0, 9);
        this.sortProducts(); // Agrega esta línea
    },
    methods: {
        filterProducts() {
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
    },
    computed: {
        filteredProducts() {
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
    margin-bottom: 10px;
}

.search-container input[type="text"] {
    width: 200px;
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #ccc;
}

.search-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

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
</style>