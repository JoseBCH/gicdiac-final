<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <router-link to="/" class="router-link"
        ><h1><span>GICDIAC</span></h1></router-link
      >
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt=""></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <router-link to="/" class="router-link" exact-active-class="active"
              >Inicio</router-link
            >
          </li>
          <li>
            <router-link
              to="/eventos"
              class="router-link"
              exact-active-class="active"
              >Eventos</router-link
            >
          </li>
          <li class="dropdown">
            <a href="#" class="router-link"
              ><span>Líneas de Investigación</span>
              <i class="bi bi-chevron-down"></i
            ></a>
            <ul>
              <li>
                <router-link
                  to="/DS-articles"
                  class="router-link"
                  exact-active-class="active"
                  >Ciencia de datos</router-link
                >
              </li>
              <li>
                <router-link
                  to="/IA-articles"
                  class="router-link"
                  exact-active-class="active"
                  >Inteligencia artificial</router-link
                >
              </li>
              <li>
                <router-link
                  to="/CS-articles"
                  class="router-link"
                  exact-active-class="active"
                  >Ciberseguridad</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="/about"
              class="router-link"
              exact-active-class="active"
              >Acerca de nosotros</router-link
            >
          </li>
          <li>
            <router-link
              to="/contacts"
              class="router-link"
              exact-active-class="active"
              >Contactos</router-link
            >
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <!-- End Header -->
</template>
<script setup></script>

<style scoped>
.router-link {
  text-decoration: none;
}
</style>
