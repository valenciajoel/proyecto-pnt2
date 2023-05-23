<template>
  <div>
      <form @submit.prevent="iniciarSesion">
        <h2>Inicie sesion</h2>
        <label for="email" class="form-label mb-3">Correo electrónico:</label>
        <input v-model="datosInicio.email" type="email" class="form-control" id="email" required>

        <label for="contraseña" class="form-label mb-3">Contraseña:</label>
        <input v-model="datosInicio.password" type="password" class="form-control" id="contraseña" required>
        <br>
        <button type="button" class=" btn btn-primary form-control mb-3">Iniciar con Google</button>
        <button type="submit" class=" btn btn-primary form-control mb-3">Iniciar sesión</button>
      </form>
      <button @click="registrarse" class=" btn btn-primary form-control mb-3">Registarse</button>

      <div v-if="inicioSesionExitoso" class=" btn btn-danger">
        Has iniciado sesión correctamente.
      </div>
      <div v-if="mostrarMensajeError" class=" btn btn-danger">
        Correo electrónico o contraseña incorrectos.
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
              <span class="text-secondary">La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.</span>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="edad" class="form-label">Edad:</label>
              <input v-model="registro.edad" type="number" class="form-control" id="edad" min="18" required>
            </div>

            <div class="col-md-6">
              <label for="dni" class="form-label">DNI:</label>
              <input v-model="registro.dni" type="number" class="form-control" id="dni" maxlength="8" required
                pattern="^\d{8}$">
                <span class="text-secondary">El dni debe ser sin puntos.</span>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="telefono" class="form-label">Teléfono:</label>
              <input v-model="registro.telefono" type="tel" class="form-control" id="telefono" required
                pattern="^\d{10}$">
                <span class="text-secondary">El telefono debe ser sin 0.</span>
            </div>

            <div class="col-md-6">
              <label for="calle" class="form-label">Calle:</label>
              <input v-model="registro.calle" type="text" class="form-control" id="calle" required>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="numeroCalle" class="form-label">Altura:</label>
              <input v-model="registro.numeroCalle" type="number" class="form-control" id="numeroCalle" required>
            </div>

            <div class="col-md-6">
              <label for="codigoPostal" class="form-label">Codigo Postal:</label>
              <input v-model="registro.codigoPostal" type="number" class="form-control" id="codigoPostal" maxlength="4" required>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="ciudad" class="form-label">Ciudad:</label>
              <select v-model="registro.ciudad" class="form-control" id="ciudad" required>
                <option value="">Selecciona una ciudad</option>
                <option v-for="opcion in opcionesCiudad" :value="opcion.value" :key="opcion.value">{{ opcion.label }}
                </option>
              </select>
            </div>

            <div class="col-md-6">
              <label for="localidad" class="form-label">Localidad:</label>
              <input v-model="registro.localidad" type="text" class="form-control " id="localidad" required>
            </div>
          </div>
          <br>
          <div class="row">
            <button type="submit" class="btn btn-primary form-control mb-3">Registrarse</button>

            <button @click="cerrarCartelRegistro" type="submit"
              class="btn btn-primary form-control mb-3">Cancelar</button>
          </div>
          <div v-if="contraseñaInvalida" class=" btn btn-danger">
            La contraseña no es valida.
          </div>
          <div v-if="dniYaRegistrado" class=" btn btn-danger">
            El DNI ya se encuentra registrado
          </div>

        </form>
      </cartel>
    </div>


  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import Cartel from './Cartel.vue';


const mostrarCartel = ref(false);
const mostrarCartelRegistro = ref(false);
const usuarios = ref([]);
const inicioSesionExitoso = ref();
const mostrarMensajeError = ref(false);
const contraseñaInvalida = ref()
const mostrarErrorContraseña = ref(false)
const dniYaRegistrado = ref()
const mostrarDniYaRegistrado = ref()

const registro = ref({
  nombre: '',
  apellido: '',
  email: '',
  password: '',
  edad: '',
  dni: '',
  telefono: '',
  calle: '',
  numeroCalle: '',
  codigoPostal: '',
  ciudad: '',
  localidad: ''
});



const opcionesCiudad = [
  { value: '1', label: 'Ciudad Autónoma de Buenos Aires' },
  { value: '2', label: 'GBA-Oeste' },
  { value: '3', label: 'GBA-Norte' },
  { value: '4', label: 'GBA-Sur' },
];

const datosInicio = ref({
  email: '',
  password: ''
})


function mostrarCartelLogin() {
  mostrarCartel.value = true;
}

function cerrarCartelLogin() {
  mostrarCartel.value = false;
}

function registrarse() {
  mostrarCartelRegistro.value = true;
}

function cerrarCartelRegistro() {
  mostrarCartelRegistro.value = false;
}

const validarContrasena = () => {
  const longitudMinima = 8;
  const longitudMaxima = 16;
  const tieneMayuscula = /[A-Z]/.test(registro.password);
  const tieneMinuscula = /[a-z]/.test(registro.password);
  const tieneNumero = /\d/.test(registro.password);

  if (
    registro.password.length < longitudMinima ||
    registro.password.length > longitudMaxima ||
    !tieneMayuscula ||
    !tieneMinuscula ||
    !tieneNumero
  ) {
    return false;
  }
  return true;
};


const registrarUsuario = () => {

  //Verifico que no exista el dni
  const dniExistente = usuarios.value.some((usuario) => usuario.dni === registro.value.dni);

  if (!dniExistente) {
    if (validarContrasena(registro.value.password)) {
      //guardo en el array al usuario 
      usuarios.value.push(registro.value);
    } else {
      mostrarErrorContraseña.value = true;
    }
  } else {
    mostrarDniYaRegistrado.value = true;
  }

  console.log(usuarios.value);


  //Reincio el formulario
  registro.value = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    edad: '',
    dni: '',
    telefono: '',
    calle: '',
    numeroCalle: '',
    codigoPostal: '',
    ciudad: '',
    localidad: ''
  };
};



function iniciarSesion() {

  console.log(datosInicio.value.email);
  console.log(datosInicio.value.password);

  const usuarioEncontrado = usuarios.value.find(
    (usuario) => usuario.email === datosInicio.value.email && usuario.password === datosInicio.value.password

  );


  if (usuarioEncontrado) {
    console.log(usuarioEncontrado.email);
    inicioSesionExitoso.value = true;
    mostrarMensajeError.value = false;
  } else {
    inicioSesionExitoso.value = false;
    mostrarMensajeError.value = true;
  }
}

</script>

