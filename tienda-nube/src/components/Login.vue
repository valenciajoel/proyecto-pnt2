<template>
  <div>
    <form @submit.prevent="iniciarSesion">

      <label for="email" class="form-label mb-3">Correo electrónico:</label>
      <input v-model="datosInicio.email" type="email" class="form-control" id="email" required>

      <label for="contraseña" class="form-label mb-3">Contraseña:</label>
      <input v-model="datosInicio.password" type="password" class="form-control" id="contraseña" required>
      <br>

      <button type="button" class=" btn btn-primary form-control mb-3">Iniciar con Google</button>
      <button type="submit" class=" btn btn-primary form-control mb-3">Iniciar sesión</button>

    </form>
    <button @click="registrarse" class=" btn btn-primary form-control mb-3">Registarse</button>

    <div v-if="store.hayUsuarioLogueado" class="mb-3">
      Usuario Logueado
    </div>
    <div v-if="store.esAdministrador" class="mb-3">
      Administrador Logueado
    </div>

    <div class="col-md-3">
      <cartel v-if="mostrarCartelRegistro" class="cartelRegistro" @submit="registrarUsuario">
        <form @submit.prevent="registrarUsuario">

          <h2>Registrarse</h2>

          <div class="row">
            <div class="col-md-6">
              <label for="nombre" class="form-label">Nombre/s:</label>
              <input v-model="registro.nombre" type="text" class="form-control" id="nombre" required>
            </div>

            <div class="col-md-6">
              <label for="apellido" class="form-label">Apellido:</label>
              <input v-model="registro.apellido" type="text" class="form-control" id="apellido" required>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="email" class="form-label">Correo electrónico:</label>
              <input v-model="registro.email" type="email" class="form-control" id="email" required>
            </div>

            <div class="col-md-6">
              <label for="password" class="form-label">Contraseña:</label>
              <input v-model="registro.password" type="password" class="form-control" id="password" required>
              <span class="text-secondary">La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y
                un número.</span>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="dni" class="form-label">DNI:</label>
              <input v-model="registro.dni" type="number" class="form-control" id="dni" maxlength="8" required
                pattern="^\d{8}$">
              <span class="text-secondary">El dni debe ser sin puntos.</span>
            </div>
            <div class="col-md-6">
              <label for="telefono" class="form-label">Teléfono:</label>
              <input v-model="registro.telefono" type="tel" class="form-control" id="telefono" required
                pattern="^\d{10}$">
              <span class="text-secondary">El telefono debe ser sin 0.</span>
            </div>

          </div>

          <br>
          <div class="row">
            <button type="submit" class="btn btn-primary form-control mb-3">Registrarse</button>

            <button @click="cerrarCartelRegistro" type="submit"
              class="btn btn-primary form-control mb-3">Cancelar</button>
          </div>

          <div v-if="mostrarMensajeRegistroExitoso" class="alert alert-success">
            Registro exitoso. ¡Bienvenido(a)!
          </div>

        </form>
      </cartel>

    </div>

  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import Cartel from './Cartel.vue';
import { useAuthStore } from '../store';
import axios from 'axios';
// Declaración de variables reactivas
const mostrarCartelRegistro = ref(false);
const mostrarMensajeRegistroExitoso = ref();
const store = useAuthStore();


const registro = ref({
  nombre: '',
  apellido: '',
  email: '',
  password: '',
  dni: '',
  telefono: '',
  rol: ''
});


//Muestra el cartel para registrase
function registrarse() {
  mostrarCartelRegistro.value = true;
}

//Cierra el cartel de registro
function cerrarCartelRegistro() {
  mostrarCartelRegistro.value = false;
}

//Almacena los datos del ingreso del login
const datosInicio = ref({
  email: '',
  password: ''
})

// Función para iniciar sesión
function iniciarSesion() {
  store.iniciarSesion(datosInicio);
}

//Trae el array de usuarios y administrador
onMounted(async () => {
  const respuesta = await axios.get(
    "https://www.mockachino.com/bdda739c-cb46-4b/api-usuariosstore"
  );
  const usuariosObtenidos = respuesta.data.usuarios;
  store.setUsuarios(usuariosObtenidos);
});


// Función para registrar un usuario
const registrarUsuario = () => {

  mostrarCartelRegistro.value = false;
  mostrarMensajeRegistroExitoso.value = true;

  //Reincio el formulario
  registro.value = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    dni: '',
    telefono: '',

  };
};

</script>



