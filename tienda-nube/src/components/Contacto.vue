<template>
    <h1>Contáctanos</h1>
    <form @submit.prevent="guardarMensaje">
  <div class="form-group">
    <label for="nombre">Nombre</label>
    <input v-model="datosRecibidos.nombre" type="text" class="form-control mb-3" id="nombre" aria-describedby="nombreHelp" placeholder="Ingrese su nombre" required>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input v-model="datosRecibidos.email" type="email" class="form-control mb-3" id="email" aria-describedby="emailHelp" placeholder="Ingrese su email" required>
    
  </div>
  <div class="form-group">
    <label for="telefono">Telefono</label>
    <input v-model="datosRecibidos.telefono" type="tel" class="form-control mb-3" id="telefono" aria-describedby="telefonoHelp" placeholder="Ingrese su telefono" required>
    
  </div>
  <div class="form-group">
    <label for="comentarios">Comentarios</label>
    <textarea v-model="datosRecibidos.comentarios" class="form-control mb-3" id="comentarios" rows="3" required></textarea>
  </div>
  <button type="submit" class="btn btn-primary mb-3">Submit</button>
</form>
  </template>
  
  <script setup>
  
  const mensajesRecibidos = ({})
  import { ref } from 'vue';

  const datosRecibidos = ref({
  nombre: '',
  email: '',
  telefono: '',
  comentarios: ''
});

  function guardarMensaje(){
    mensajesRecibidos.value.push(datosRecibidos.value);
  }

  </script>