<script>
export default {
    data() {
        return {
            cardsPerSlide: 3 // Número de tarjetas que se mostrarán por slide
        };
    },
    computed: {
        chunkedProducts() {
            // Dividir los productos en grupos según el número de tarjetas por slide
            const chunkSize = this.cardsPerSlide;
            const productsCopy = [...this.products]; // Hacer una copia de los productos para no modificar el array original
            const chunkedArray = [];

            while (productsCopy.length > 0) {
                chunkedArray.push(productsCopy.splice(0, chunkSize));
            }

            return chunkedArray;
        }
    }
};
</script>
<script setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { products } from "@/products.js";


</script>
<script>
</script>

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
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../img/DALL·E 2023-05-22 22.55.17 - a photo catalog of cloths with model men.png"
                            class="d-block w-100" style="width: 300px; height: 600px;">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../img/DALL·E 2023-05-22 22.55.30 - a photo catalog of cloths with model men.png"
                            class="d-block w-100" style="width: 300px; height: 600px;">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../img/DALL·E 2023-05-22 22.55.41 - a photo catalog of cloths with model men.png"
                            class="d-block w-100" style="width: 300px; height: 600px;">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
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

  

<style lang="">

</style>
