import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {

  const usuario = ref(null)
  const usuarios = ref([]);
  const administrador = ref(null)

  //Recibe los datos de la api de Mockachino y los setea en usuarios
  function setUsuarios(usuariosRecibidos) {
    usuarios.value = usuariosRecibidos;
    
  }

  
  function iniciarSesion(datosRecibidos) {
    
    //Busca lal usuario en el array de usuario con los datos recibidos en el login
    const usuarioValido = usuarios.value.find(user => user.email === datosRecibidos.value.email && user.password === datosRecibidos.value.password);
    console.log(usuarioValido)

    //Asigna al tipo usuario correspondiente
    if (usuarioValido) {
      if (usuarioValido.rol === 'administrador') {
        administrador.value = usuarioValido;
      } else {
        usuario.value = usuarioValido;
      }
    }
  }

  function cerrarSesion() {
    usuario.value = null;
  }

  function getUsuario(){
    return usuario.value
  }

  //Propiedad que devulve un booleano de si esta o no logueado.
  const hayUsuarioLogueado = computed(() => usuario.value != null)
  const esAdministrador  = computed(() => administrador.value != null)
  
  return { iniciarSesion, cerrarSesion, hayUsuarioLogueado, setUsuarios,esAdministrador,usuario }

})


