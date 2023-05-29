import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useAuthStore  = defineStore('auth', () => {
    
    const usuario = ref(null)

    function iniciarSesion(usuarioRecibido) {
          usuario.value = usuarioRecibido;
      }

      function cerrarSesion() {
        usuario.value = null;
      }

      //es un getters
    const hayUsuarioLogueado = computed(()=> usuario.value != null)

      return {iniciarSesion, cerrarSesion,hayUsuarioLogueado}

})
//hacer otra funcion para devolver booleano
