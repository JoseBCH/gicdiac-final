<template>
  <!-- ======= Team Section ======= -->
  <section id="team" class="team section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h3>Equipo <span>GICDIAC</span></h3>
        <p>Conoce a nuestro equipo de expertos, líderes en Ciencia de Datos, Inteligencia Artificial y Ciberseguridad.
        </p>
      </div>

      <!--LIDER-->
      <div class="section-title mt-1 pb-0">
        <h5 class="text-start"><span><i class="bi bi-chevron-double-right"></i>Líder</span></h5>
      </div>
      <div class="row d-flex justify-content-center">
        <div v-for="leader in leaders" :key="leader.id"
          class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
          <div class="member">
            <div class="member-img">
              <img :src="leader.image" class="img-fluid" alt="">
              <div class="social">
                <a :href="leader.CTI_Vitae" target="_blank"><i class="bi bi-file-earmark-person"></i></a>
                <a :href="leader.linkedin" target="_blank"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <router-link :to="{ name: 'investigador', params: { id: leader.inv_id }}" class="router-link">
                <h4 class="text-center">{{ leader.names }}</h4>
              </router-link>
              <span class="text-center">{{ leader.specialty }}</span>
            </div>
          </div>
        </div>
      </div>

      <!--DOCENTES-->
      <div class="section-title mt-1 pb-0">
        <h5 class="text-start"><span><i class="bi bi-chevron-double-right"></i>Docentes</span></h5>
      </div>
      <div class="row d-flex justify-content-center">
        <div v-for="docente in docentes" :key="docente.id"
          class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
          <div class="member">
            <div class="member-img">
              <img :src="docente.image" class="img-fluid" alt="">
              <div class="social">
                <a :href="docente.CTI_Vitae" target="_blank"><i class="bi bi-file-earmark-person"></i></a>
                <a :href="docente.linkedin" target="_blank"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <router-link :to="{ name: 'investigador', params: { id: docente.inv_id }}" class="router-link">
                <h4 class="text-center">{{ docente.names }}</h4>
              </router-link>
              <span class="text-center">{{ docente.specialty }}</span>
            </div>
          </div>
        </div>
      </div>

      <!--ESTUDIANTES-->
      <div class="section-title mt-5 pb-0">
        <h5 class="text-start"><span><i class="bi bi-chevron-double-right"></i>Investigadores en formación</span></h5>
      </div>
      <div class="row d-flex justify-content-center">
        <div v-for="student in students" :key="student.stu_id"
          class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
          <div class="member">
            <div class="member-img">
              <img :src="student.image" class="img-fluid" alt="">
              <div class="social">
                <a :href="student.CTI_Vitae" target="_blank"><i class="bi bi-file-earmark-person"></i></a>
                <a :href="student.linkedin" target="_blank"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <router-link :to="{ name: 'student', params: { id: student.stu_id} }" class="router-link">
                <h4 class="text-center">{{ student.names }}</h4>
              </router-link>
              <span class="text-center">{{ student.specialty }}</span>
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

const leaders = ref([]);
const docentes = ref([]);
const investigadores = ref([]);
const students = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('src/assets/db/data.json');
    investigadores.value = response.data.investigadores;
    docentes.value = response.data.investigadores.filter(investigador => investigador.role === 'docente');
    leaders.value = response.data.investigadores.filter(investigador => investigador.role === 'leader');
    students.value = response.data.students.filter(student => student.state === 'A');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


onMounted(() => {
  fetchData();
});
</script>
<style scoped>
.router-link :hover {
  text-decoration: underline;
}

.router-link {
  text-decoration: none;
}
</style>