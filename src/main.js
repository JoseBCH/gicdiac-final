import '@/assets/css/style.css';

import '@/assets/vendor/aos/aos.css';
import '@/assets/vendor/aos/aos.css';
import '@/assets/vendor/bootstrap/css/bootstrap.min.css';
import '@/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '@/assets/vendor/boxicons/css/boxicons.min.css';
import '@/assets/vendor/glightbox/css/glightbox.min.css';
import '@/assets/vendor/swiper/swiper-bundle.min.css';
import 'aos/dist/aos.css';

// Importar scripts JS
import '@/assets/vendor/purecounter/purecounter_vanilla.js';
import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import '@/assets/vendor/glightbox/js/glightbox.min.js';
import '@/assets/vendor/isotope-layout/isotope.pkgd.min.js';
import '@/assets/vendor/swiper/swiper-bundle.min.js';
import '@/assets/vendor/waypoints/noframework.waypoints.js';
import '@/assets/vendor/php-email-form/validate.js';
import '@/assets/js/principal';
import 'boxicons/css/boxicons.min.css';



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'


const app = createApp(App)
app.use(router)
app.mixin({
    created() {
      AOS.init({
        duration: 1500,
      });
    }
  });
app.mount('#app')