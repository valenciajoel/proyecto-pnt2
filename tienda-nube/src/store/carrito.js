
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    showSummary: false,
  }),
  getters: {
    cartItemsCount: state => state.cart.length
  },
  actions: {
    addToCart(product) {
      this.cart.push(product);
    },

    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    clearCart() {
      this.cart.splice(0);
    }
  }
});