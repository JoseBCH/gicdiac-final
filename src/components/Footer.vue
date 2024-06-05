<template>
  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>GICDIAC<span>.</span></h3>
            <p>
              Calle Juan XXIII Nº 391<br />
              Ciudad Universitaria<br />
              Lambayeque <br /><br />
              <strong>Email:</strong> gicdiac@unprg.edu.pe<br />
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Enlaces de interés</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"
                  ><router-link to="/" class="router-link"
                    >Inicio</router-link
                  ></i
                >
              </li>
              <li>
                <i class="bx bx-chevron-right"
                  ><router-link
                    to="/eventos"
                    class="router-link"
                    exact-active-class="active"
                    >Eventos</router-link
                  ></i
                >
              </li>
              <li>
                <i class="bx bx-chevron-right"
                  ><router-link
                    to="/about"
                    class="router-link"
                    exact-active-class="active"
                    >Acerca de nosotros</router-link
                  ></i
                >
              </li>
              <li>
                <i class="bx bx-chevron-right"
                  ><router-link
                    to="/contacts"
                    class="router-link"
                    exact-active-class="active"
                    >Contactos</router-link
                  ></i
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Líneas de Investigación</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right">
                  <router-link
                    to="/DS-articles"
                    class="router-link"
                    exact-active-class="active"
                    >Ciencia de datos</router-link
                  ></i
                >
              </li>
              <li>
                <i class="bx bx-chevron-right">
                  <router-link
                    to="/IA-articles"
                    class="router-link"
                    exact-active-class="active"
                    >Inteligencia artificial</router-link
                  ></i
                >
              </li>
              <li>
                <i class="bx bx-chevron-right">
                  <router-link
                    to="/CS-articles"
                    class="router-link"
                    exact-active-class="active"
                    >Ciberseguridad</router-link
                  ></i
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Nuestras Redes Sociales</h4>
            <div class="social-links mt-3">
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-4">
      <div class="copyright">
        &copy; Copyright <strong><span>GICDIAC</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits">
        GICDIAC | <a href="https://www.unprg.edu.pe/">UNPRG</a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>
<script setup></script>
<style scoped>
a {
  text-decoration: none;
}
</style>
