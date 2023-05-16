<template>
    <div class="product-item">
        <img :src="product.image" :alt="product.name" />
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
    </div>
</template>
  
<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.product-item {
    width: 150px;
    margin: 10px;
}

.product-item img {
    width: 100%;
    height: auto;
}
</style>
  