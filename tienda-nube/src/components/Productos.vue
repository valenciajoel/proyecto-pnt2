<template>
    <div>
        <h1>Imágenes de productos de ropa</h1>
        <ProductGallery :products="products" />
    </div>
</template>
  
<script>
import ProductGallery from './ProductGallery.vue'; // Componente separado para la galería de productos

export default {
    components: {
        ProductGallery,
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "Buzo",
                    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/596/994/products/mdw-editado_1661-7d7cc0055546d632fa16832270719927-640-0.webp",
                },
                {
                    id: 2,
                    name: "Campera",
                    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/596/994/products/campera-puffer1-a8d41eb1ca5874077d16820084541256-640-0.webp",
                },
                {
                    id: 3,
                    name: "Pantalones",
                    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/596/994/products/carpenter1-1fab18769ad15a609716776104184092-640-0.webp",
                },
                {
                    id: 4,
                    name: "Chaleco",
                    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/596/994/products/chaleco-lacar1-ba94cb5e288e94eb7216820095270646-640-0.webp",
                },
                {
                    id: 5,
                    name: "CropTop",
                    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/596/994/products/remera-iggy1-ad05834ebb5b0aae9a16818431433671-640-0.webp",
                },
                {
                    id: 6,
                    name: "Camisa",
                    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/596/994/products/ontario1-9a3fa51412bf6c4c6516814840899168-1024-1024.webp",
                },
                {
                    id: 7,
                    name: "Buzo",
                    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/596/994/products/dsc071431-37bf49a73d1e82dd1516693326419623-1024-1024.webp",
                },
                {
                    id: 8,
                    name: "Polar",
                    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/596/994/products/mdw-color_1951-f3c31408c53ab456ad16835612021448-1024-1024.webp",
                },
                {
                    id: 9,
                    name: "Jogger",
                    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/596/994/products/mdw-color_1671-398047b178fd831dbf16835648415010-1024-1024.webp",
                },
                {
                    id: 10,
                    name: "Medias",
                    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/596/994/products/dsc001771-6a38569713256dc3fd16662036019314-1024-1024.webp",
                },
                // ... otros productos ...
            ],
        };
    },
};
</script>
  