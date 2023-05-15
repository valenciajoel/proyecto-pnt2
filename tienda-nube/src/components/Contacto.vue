<template>
    <h1>Contáctanos</h1>
    <form>
  <div class="form-group">
    <label for="nombre">Nombre</label>
    <input type="text" class="form-control" id="nombre" aria-describedby="nombreHelp" placeholder="Ingrese su nombre">
    <small id="nombreHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingrese su email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="telefono">Telefono</label>
    <input type="tel" class="form-control" id="telefono" aria-describedby="telefonoHelp" placeholder="Ingrese su telefono">
    <small id="telefonoHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="comentarios">Comentarios</label>
    <textarea class="form-control" id="comentarios" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </template>
  
  <script setup>
  
  </script>