import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {

  const usuario = ref(null)
  const usuarios = ref([]);
  const administrador = ref(null)

  function setUsuarios(usuariosRecibidos) {
    usuarios.value = usuariosRecibidos;
    
  }

  function iniciarSesion(datosRecibidos) {
    

    const usuarioValido = usuarios.value.find(user => user.email === datosRecibidos.value.email && user.password === datosRecibidos.value.password);
    console.log(usuarioValido)

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

  //es un getters
  const hayUsuarioLogueado = computed(() => usuario.value != null)
  const esAdministrador  = computed(() => administrador.value != null)

  return { iniciarSesion, cerrarSesion, hayUsuarioLogueado, setUsuarios, usuario, administrador,esAdministrador }

})
//hacer un usuario es administrador

