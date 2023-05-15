<template>
    <div>
      <button @click="mostarCartelLogin">Login</button>
      <cartel v-if="mostarCartel" @close="cerrarCarterLogin">
        <form>
          <h2>Inicie sesion</h2>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" required>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" required>
        <button type="submit">Iniciar sesión</button>
      </form>
      <button @click="registrarse">Registarse</button>
    </cartel>
    
    <cartel v-if="mostarCartelRegistro" @click="EnivarDatos">
      <form>
  <div class="form-group">
    <label for="nombre">Nombre/s</label>
    <input type="text" class="form-control" id="nombreEmail1" aria-describedby="nombreHelp" placeholder="Maria">
    <small id="nombreHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="apellido">Apellido</label>
    <input type="text" class="form-control" id="apellido" aria-describedby="apellidoHelp" placeholder="Lopez">
    <small id="apellidoHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="ejemplo@gamil.com">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="edad">Edad</label>
    <input type="number" class="form-control" id="edad" aria-describedby="edadlHelp" placeholder="18">
    <small id="edadHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="dni">DNI</label>
    <input type="number" class="form-control" id="dni" aria-describedby="dniHelp" placeholder="35648957">
    <small id="dniHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="telefono">Telefono</label>
    <input type="tel" class="form-control" id="telefono" aria-describedby="telefonoHelp" placeholder="31135628475">
    <small id="telefonoHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="calle">Calle</label>
    <input type="text" class="form-control" id="calle" aria-describedby="calleHelp" placeholder="mitre">
    <small id="calleHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="numerocalle">Altura</label>
    <input type="text" class="form-control" id="numerocalle" aria-describedby="numerocalHelp" placeholder="4569">
    <small id="numerocalHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="codigoPostal">Altura</label>
    <input type="text" class="form-control" id="codigoPostal" aria-describedby="codigoPostalHelp" placeholder="CP1043">
    <small id="codigoPostalHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="Localidad">Localidad</label>
    <select class="form-control" id="Localidad">
      <option>Ciudad Autonoma de Buenos Aires</option>
      <option>GBA-OESTA</option>
      <option>GBA-NORTE</option>
      <option>GBA-SUR</option>
    </select>
  </div>
  <div class="form-group">
    <label for="ciudad">Altura</label>
    <input type="text" class="form-control" id="ciudad" aria-describedby="ciudadHelp" placeholder="Lomas de Zamora">
    <small id="ciudadHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </cartel>
    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Cartel from './Cartel.vue';
    
      const mostarCartel = ref(false);
      const mostarCartelRegistro = ref(false);
  
      function mostarCartelLogin() {
        mostarCartel.value = true;
      }
  
      function cerrarCarterLogin() {
        mostarCartel.value = false;
      }

      function registrarse(){
        mostarCartelRegistro.value = true;
      }

      function EnivarDatos(){
        //debe enviar datos
      }
  
  </script>