import { defineStore } from 'pinia';
import {useAuthStore} from '../store'
const store = useAuthStore();
export const useCartStore = defineStore('cart', {

  state: () => ({
    cart: []
  }),
  getters: {
    cartItemsCount: state => state.cart.length
  },
  actions: {
    addToCart(product) {
      if(store.hayUsuarioLogueado()){
        this.cart.push(product);
      }
      
    },
    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  }
});
