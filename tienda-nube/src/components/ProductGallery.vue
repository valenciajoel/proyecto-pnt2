<template>
    <div class="image-container">
        <div class="product-row" v-for="row in productRows" :key="rowIndex">
            <div class="product-column" v-for="(product, columnIndex) in row" :key="columnIndex">
                <ProductItem :product="product" />
            </div>
        </div>
    </div>
</template>
  
<script>
import ProductItem from './ProductItem.vue';

export default {
    components: {
        ProductItem,
    },
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
    computed: {
        productRows() {
            const rows = [];
            const productsCopy = [...this.products];

            while (productsCopy.length > 0) {
                rows.push(productsCopy.splice(0, 3));
            }

            return rows;
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

.product-row {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.product-column {
    width: 150px;
    padding: 10px;
    margin-right: 20px;
    box-sizing: border-box;
}

.product-column:last-child {
    margin-right: 0;
}
</style>
  