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
      <!-- <div class="row d-flex justify-content-center">
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
              <router-link :to="{ name: 'leader', params: { id: leader.ldr_id}}" class="router-link">
                <h4 class="text-center">{{ leader.names }}</h4>
              </router-link>
              <span class="text-center">{{ leader.specialty }}</span>
            </div>
          </div>
        </div>
      </div> CONFLICTO AL INTENTAR AGREGAR LEADER--> 
      

      <!--DOCENTES-->
      <div class="section-title mt-1 pb-0">
        <h5 class="text-start"><span><i class="bi bi-chevron-double-right"></i>Docentes</span></h5>
      </div>
      <div class="row d-flex justify-content-center">
        <div v-for="investigador in investigadores" :key="investigador.id"
          class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
          <div class="member">
            <div class="member-img">
              <img :src="investigador.image" class="img-fluid" alt="">
              <div class="social">
                <a :href="investigador.CTI_Vitae" target="_blank"><i class="bi bi-file-earmark-person"></i></a>
                <a :href="investigador.linkedin" target="_blank"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <router-link :to="{ name: 'investigador', params: { id: investigador.inv_id}}" class="router-link">
                <h4 class="text-center">{{ investigador.names }}</h4>
              </router-link>
              <span class="text-center">{{ investigador.specialty }}</span>
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
const investigadores = ref([]);
const students = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('src/assets/db/data.json');
    leaders.value = response.data.leaders;
    investigadores.value = response.data.investigadores;
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