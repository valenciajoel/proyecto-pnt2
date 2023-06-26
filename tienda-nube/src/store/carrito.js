import { defineStore } from 'pinia';
// Definir y exportar el store 'useCartStore'
//import {useAuthStore} from '../store'
//const store = useAuthStore();
export const useCartStore = defineStore('cart', {

  state: () => ({
    cart: [], // Array que almacena los productos en el carrito
    showSummary: false,
  }),
  getters: {
    cartItemsCount: state => state.cart.length // Getter que devuelve la cantidad de elementos en el carrito
  },
  actions: {
    addToCart(product) {
      this.cart.push(product); //Agregar al carrito
    },

    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index !== -1) {
        this.cart.splice(index, 1); //Eliminar el producto del carrito
      }
    },
    clearCart() {
      this.cart.splice(0); //Vaciar el carrito
    }
  }
});