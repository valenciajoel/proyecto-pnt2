
<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <!-- Modal -->
  <div class="modal fade" id="LoginUser" tabindex="-1" aria-labelledby="modalLogin" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <!--<h1 class="modal-title fs-5" id="modalLogin">Modal title</h1>-->
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Login v-if="showLoginContent" @close="closeLogin" />
            </div>
          </div>
        </div>
      </div>

  <div>

    <div v-if="!cartStore.showSummary">
      <h2>Carrito de compras</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }} - Cantidad: {{ item.cantidad }} -
          Total : ${{ item.cantidad * item.price }}
          <br />
          <button @click="removeFromCart(item)">Eliminar</button>
        </li>
      </ul>
      <p>Total de artículos: {{ cartItemsCount }}</p>
      <p>Presupuesto total: {{ getTotalBudget() }}</p>


      <button @click="checkout">Finalizar compra</button>
    </div>
    <div v-if="this.cartStore.showSummary">
      <h1>Compra realizada con exito!</h1>
      <h2>Resumen de compra</h2>

      <p>Total compra: {{ getTotalBudget() }}</p>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }} - Cantidad: {{ item.cantidad }} -
          Total: ${{ item.cantidad * item.price }}
        </li>
      </ul>
      <button @click="finish">FINALIZAR</button>

    </div>
  </div>
</template>

<script>
import { GoogleSheets } from "../connectionWithGoogle";
import { useAuthStore } from "@/store.js"
import { useCartStore } from "@/store/carrito";

//Modal
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./Login.vue";

export default {
  data() {
    return {
      cartStore: useCartStore(),
      userStore: useAuthStore(),
      showLoginContent: false,
    };
  },
  computed: {
    cart() {
      return this.cartStore.cart;
    },
    cartItemsCount() {
      return this.cartStore.cartItemsCount;
    },
    user() {
      return this.userStore.usuario;
    }
  },
  methods: {
    removeFromCart(item) {
      const cartStore = useCartStore();
      cartStore.removeFromCart(item);
    },
    getTotalBudget() {
      const cartStore = useCartStore();
      let total = 0;
      for (const item of cartStore.cart) {
        const cantidad = parseFloat(item.cantidad);
        const price = parseFloat(item.price);
        if (!isNaN(cantidad) && !isNaN(price)) {
          total += cantidad * price;
        }
      }
      return "$" + total;
    },
    getProducts() {
      const cartStore = useCartStore();
      let products = [];
      for (const item of cartStore.cart) {
        let product = { id: item.id, cantidad: item.cantidad, };
        products.push(product);
      }
      return products;
    },
    getUser() {
      const userStore = useAuthStore();
      const proxyObject = userStore.usuario;
      const jsonObject = JSON.parse(JSON.stringify(proxyObject));
      return jsonObject;
    },
    openLogin() {
      this.showLoginContent = true; // Modifica esta línea
    },
    closeLogin() {
      this.showLoginContent = false; // Modifica esta línea
    },
    checkout() {
      this.cartStore.showSummary = true;
    },
    finish() {
      let compra = {
        productos: this.getProducts(),
        usuario: this.getUser(),
        total: this.getTotalBudget(),
      };
      console.log(compra);
      GoogleSheets.enviarCompra(compra);
      this.cartStore.clearCart();
      this.cartStore.showSummary = false;
    }
  },
  components: { Login }
};

</script>
