<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useRouter } from "vue-router";
import { watch } from "vue";
import { ref } from "vue";
import { useAuthStore } from "./store";
import { ModalsContainer, useModal } from "vue-final-modal";
import Modal from "./Modal.vue";
import Login from "./components/Login.vue";
const { open, close } = useModal({
  component: Modal,
  attrs: {
    title: "Inicie Sesion",
    onConfirm() {
      close();
    },
  },
  slots: {
    default: Login,
  },
});

const router = useRouter();

const home = () => {
  router.push("/");
};

const catalogo = () => {
  router.push("/Productos");
};

const contacto = () => {
  router.push("/Contacto");
};

const carrito = () => {
  router.push("/Carrito");
};

const login = () => {
  router.push("/Login");
};

const administrador = () => {
  router.push("/Administrador");
};

const mostrarBotonAdministrador = ref(false);

const store = useAuthStore();

watch(
  () => store.esAdministrador,
  (newValue) => {
    mostrarBotonAdministrador.value = newValue;
  }
);
</script>



<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click="home">
        <img
          src="./components/FLAB_Icon.jpg"
          alt="Logo"
          width="40"
          height="20"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" @click="home"
                >Home</a
              >
            </li>

            <li class="nav-item">
              <a class="nav-link" @click="catalogo" href="#">Catálogo</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" @click="contacto" href="#">Contacto</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" @click="carrito" href="#"
                >Carrito de compras</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="open" href="#">Acceder</a>
              <ModalsContainer />
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                v-if="mostrarBotonAdministrador"
                @click="administrador"
                href="#"
                >Administrador</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-column">
        <h3>Datos de la empresa</h3>
        <p>FASHION LAB</p>
        <p>Avenida del Sol 456</p>
      </div>
      <div class="footer-column">
        <h3>Contacto</h3>
        <p>fashionlab@gmail.com</p>
        <p>+54 9 1152879456</p>
      </div>
      <div class="footer-column">
        <h3>Social</h3>
        <p>Seguinos en:</p>
        <div class="social-media-icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
/* Estilos adicionales */

.footer {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-around;
}

.footer-column {
  flex-basis: 30%;
}

.footer-column h3 {
  margin-bottom: 10px;
}

.footer-column p {
  margin-bottom: 5px;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.social-icons i {
  margin: 0 5px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.footer-column {
  flex-basis: 30%;
}
</style>
