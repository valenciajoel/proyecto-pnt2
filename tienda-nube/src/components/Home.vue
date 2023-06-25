

<template>
    <div class="container">
        <div class="row">
            <div id="carouselProducts" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselProducts" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselProducts" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselProducts" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselProducts" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselProducts" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../img/1.jpg"
                            class="d-block w-100" style="width: 300px; height: 600px;">
                        <div class="carousel-caption d-none d-md-block">
                    
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../img/2.jpg"
                            class="d-block w-100" style="width: 300px; height: 600px;">
                        <div class="carousel-caption d-none d-md-block">
                           
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../img/3.jpg"
                            class="d-block w-100" style="width: 300px; height: 600px;">
                        <div class="carousel-caption d-none d-md-block">
                            
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../img/Promocion 30off.png" class="d-block w-100" style="width: 300px; height: 600px;"
                        @click="showDiscountProducts">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../img/Promociones Banco1.png" class="d-block w-100" style="width: 300px; height: 600px;">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselProducts" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselProducts" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div class="row">
            <div id="carouselCards" class="carousel slide">
                <div class="carousel-indicators">
                    <button v-for="(product, index) in products" :key="index" type="button" data-bs-target="#carouselCards"
                        :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-current="index === 0"
                        :aria-label="`Slide ${index + 1}`"></button>
                </div>
                <div class="carousel-inner">
                    <div v-for="(product, index) in products" :key="index" class="carousel-item"
                        :class="{ active: index === 0 }">
                        <div class="card-group">
                            <div class="card">
                                <img :src="product.image" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">{{ product.name }}</h5>
                                    <p class="card-text">Price: ${{ product.price }}</p>
                                </div>
                            </div>
                            <div class="card">
                                <img :src="product.image" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">{{ product.name }}</h5>
                                    <p class="card-text">Price: ${{ product.price }}</p>
                                </div>
                            </div>
                            <div class="card">
                                <img :src="product.image" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">{{ product.name }}</h5>
                                    <p class="card-text">Price: ${{ product.price }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselCards" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselCards" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>


    </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { products } from "@/products.js";
import { useRouter } from "vue-router";

const cardsPerSlide = 3; // Número de tarjetas que se mostrarán por slide
const router = useRouter();

const chunkedProducts = (() => {
    // Dividir los productos en grupos según el número de tarjetas por slide
    const chunkSize = cardsPerSlide;
    const productsCopy = [...products]; // Hacer una copia de los productos para no modificar el array original
    const chunkedArray = [];

    while (productsCopy.length > 0) {
        chunkedArray.push(productsCopy.splice(0, chunkSize));
    }

    return chunkedArray;
})();


function showDiscountProducts() {
  router.push('/Promocion');
}


</script>

<style scoped>
.carousel-image {
  max-width: 100%;
  height: 100px;
  /* Establece el tamaño máximo para las imágenes del carrusel */
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(100%); /* Invertir el color de las flechas a negro */
}

.carousel-control-prev,
.carousel-control-next {
  color: black; /* Establecer el color de las flechas a negro */
}
.carousel-indicators button {
  background-color: black;
  border: 1px solid black;
}

.carousel-indicators .active {
  background-color: black;
}
</style>
