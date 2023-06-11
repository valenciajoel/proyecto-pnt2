<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'


defineProps<{
  title?: string,
  total?: number,
  carrito?: [{id?,price?,name?,cantidad?}],
}>()

const emit = defineEmits<{
  (e: 'confirm'): void
}>()
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <h1>{{ title }}</h1>
    

    <h2>Resumen de compra</h2>

    <p>Total compra: ${{ total}}</p>
    <ul>
        <li v-for="item in carrito" :key="item.id">
            {{ item.name }} - ${{ item.price }} - Cantidad: {{ item.cantidad }} - Total: ${{ item.cantidad * item.price }}
        </li>
    </ul>

    <button @click="emit('confirm')">
      Confirm
    </button>
  </VueFinalModal>
</template>

<style>
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
}
.confirm-modal-content > * + *{
  margin: 0.5rem 0;
}
.confirm-modal-content h1 {
  font-size: 1.375rem;
}
.confirm-modal-content button {
  margin: 0.25rem 0 0 auto;
  padding: 0 8px;
  border: 1px solid;
  border-radius: 0.5rem;
}
.dark .confirm-modal-content {
  background: #000;
}
</style>
