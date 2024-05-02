<template>
  <!-- ======= Team Section ======= -->
  <section id="team" class="team section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h3>Equipo <span>GICDIAC</span></h3>
        <p>Conoce a nuestro equipo de expertos, líderes en Ciencia de Datos, Inteligencia Artificial y Ciberseguridad.
        </p>
      </div>

      <div class="row d-flex justify-content-center">

        <div v-for="investigador in investigadores" :key="investigador.id"
          class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
          <div class="member">
            <div class="member-img">
              <img :src="investigador.image" class="img-fluid" alt="">
              <div class="social">
                <a :href="investigador.facebook" target="_blank"><i class="bi bi-facebook"></i></a>
                <a :href="investigador.linkedin" target="_blank"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <router-link :to="{ name: 'investigador', params: { id: investigador.inv_id } }" class="router-link">
                <h4 class="text-center">{{ investigador.names }}</h4>
              </router-link>
              <span class="text-center">{{ investigador.especialidad }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section><!-- End Team Section -->
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const investigadores = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('src/assets/db/data.json');
    investigadores.value = response.data.investigadores;
    console.log(investigadores);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


onMounted(() => {
  fetchData();
});
</script>
<style scoped>
.router-link :hover{
  text-decoration: underline;
}
.router-link {
  text-decoration: none;
}
</style>