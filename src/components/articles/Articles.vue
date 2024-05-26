<template>
  <!-- ======= Acticles Section ======= -->
  <section id="blog" class="blog">
    <div class="container" data-aos="fade-up">
      <div class="row d-flex justify-content-center align-items-center py-4 mb-5 article">
        <div class="col-9 mb-5">
          <h1><span>{{ title }}</span></h1>
          <p class="parrafo">{{ description }}</p>
        </div>
        <div class="col-3">
          <img v-if="title === 'Inteligencia Artificial'" src="../../assets/img/lines/artificial-intelligence.avif"
            class="img-fluid rounded-circle" alt="">
          <img v-if="title === 'Ciberseguridad'" src="../../assets/img/lines/security.jpg"
            class="img-fluid rounded-circle" alt="">
          <img v-if="title === 'Ciencia de datos'" src="../../assets/img/lines/data-science.jpg"
            class="img-fluid rounded-circle" alt="">
        </div>
      </div>

      <div class="row g-5 mt-5">

        <div class="col-lg-12" data-aos="fade-up" data-aos-delay="200">

          <div class="row gy-5 posts-list">
            <div class="section-title mt-1 pb-0">
              <h3 class="text-start"><span><i class="bi bi-chevron-double-right"></i> Proyectos</span></h3>
            </div>
            <div v-for="(proyecto, index) in proyectos" class="col-lg-4">
              <article class="d-flex flex-column article">
                <h2 class="title">
                  <a>{{ proyecto.titulo }}</a>
                </h2>
                <div class="content">
                  <p>
                    {{ proyecto.descripcion }}
                  </p>
                </div>
              </article>
            </div>
            <div v-if="proyectos.length === 0">
              <p class="parrafo">No hay proyectos disponibles para esta categoría.</p>
            </div>
          </div><!-- End blog posts list -->

          <!-- <div class="blog-pagination mb-3">
            <ul class="justify-content-center">
              <li><a href="#">1</a></li>
              <li class="active"><a href="#">2</a></li>
              <li><a href="#">3</a></li>
            </ul>
          </div>
          End blog pagination -->

        </div>

      </div>
    </div>
  </section><!-- End Acticles Section -->

  <section id="blog" class="blog">
    <div class="container mt-2" data-aos="fade-up">
      <div class="row g-5">

        <div class="col-lg-12" data-aos="fade-up" data-aos-delay="200">

          <div class="row gy-5 posts-list">
            <div class="section-title mt-1 pb-0">
              <h3 class="text-start"><span> <i class="bi bi-chevron-double-right"></i> Publicaciones científicas</span></h3>
            </div>
            <div class="col-lg-4">
              <article class="d-flex flex-column article">
                <h3><i class="bx bx-file"></i></h3>
                <h2 class="title">
                  <a class="font" href="blog-details.html">Dolorum optio tempore voluptas dignissimos cumque fuga qui
                    quibusdam
                    quia</a>
                </h2>
              </article>
            </div><!-- End post list item -->

            <div class="col-lg-4">
              <article class="d-flex flex-column article">
                <h3><i class="bx bx-file"></i></h3>
                <h2 class="title">
                  <a class="font" href="blog-details.html">Accusamus quaerat aliquam qui debitis facilis consequatur</a>
                </h2>
              </article>
            </div><!-- End post list item -->

            <div class="col-lg-4">
              <article class="d-flex flex-column article">
                <h3><i class="bx bx-file"></i></h3>
                <h2 class="title">
                  <a class="font" href="blog-details.html">Distinctio provident quibusdam numquam aperiam aut</a>
                </h2>
              </article>
            </div><!-- End post list item -->

          </div><!-- End blog posts list -->

          <!-- <div class="blog-pagination mb-3">
            <ul class="justify-content-center">
              <li><a href="#">1</a></li>
              <li class="active"><a href="#">2</a></li>
              <li><a href="#">3</a></li>
            </ul>
          </div>
          End blog pagination -->

        </div>

      </div>
    </div>
  </section><!-- End Acticles Section -->
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const $route = useRoute()

const param = ref($route.meta.title)
const title = ref('')
const description = ref('')
const proyectos = ref([])

const proyectosIA = ref([
  { titulo: 'Aportes del Machine Learning al cultivo de mango: una revisión de la literatura', descripcion: 'El proyecto de investigación presentado se centra en los aportes del Machine Learning al cultivo de mango, abordando desafíos como la detección temprana de frutas, manejo de plagas y enfermedades, evaluación de calidad y madurez de los frutos, y estimación del rendimiento.' },
  { titulo: 'Una revisión sistemática de modelos de Deep Learning en la detección de cáncer de mama', descripcion: 'El proyecto de investigación presentado se enfoca en identificar los tipos de cáncer detectados, las características de las imágenes utilizadas, los algoritmos de Deep Learning aplicados, los países donde se realizan estas investigaciones y el rendimiento de los modelos.' },
]);

const proyectosDS = ref([
]);

const proyectosCS = ref([
  { titulo: 'Ciberseguridad en las pymes de países en desarrollo: Una revisión sistemática de la literatura', descripcion: 'El proyecto de investigación presentado aborda la creciente preocupación por los ataques cibernéticos y los desafíos de ciberseguridad que enfrentan las pequeñas y medianas empresas (pymes) en países en desarrollo, especialmente durante la pandemia de COVID-19, identificando los factores críticos que influyen en la adopción de la ciberseguridad, los marcos de trabajo y estándares implementados, y el nivel de madurez en ciberseguridad de las pymes.' },
]);

async function updateDescription() {
  if (param.value === "DS") {
    title.value = "Ciencia de datos";
    description.value = "La Ciencia de Datos fusiona estadísticas, matemáticas e informática para entender conjuntos de datos. Encuentra aquí nuestros artículos y proyectos en curso que muestran nuestro trabajo innovador en esta área.";
    proyectos.value = proyectosDS.value;
  } else if (param.value === "IA") {
    title.value = "Inteligencia Artificial";
    description.value = "La Inteligencia Artificial abarca algoritmos y modelos que imitan el aprendizaje humano para tomar decisiones inteligentes. Descubre nuestros artículos y proyectos en curso que muestran nuestro trabajo innovador en esta área.";
    proyectos.value = proyectosIA.value;
  } else {
    title.value = "Ciberseguridad";
    description.value = "La Ciberseguridad implica el desarrollo de estrategias y tecnologías para prevenir y mitigar ataques cibernéticos. Descubre aquí nuestros artículos, proyectos y otras contribuciones en esta importante área de protección digital.";
    proyectos.value = proyectosCS.value;
  }
}

updateDescription();

</script>
<style scoped>
.badge {
  font-size: 30px;
  letter-spacing: 1px;
  font-weight: 500;
  padding: 8px 20px;
  background: #e7f1fd;
  color: #444444;
  display: inline-flex;
  border-radius: 50px;
}

.item {
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.3);
  padding: 30px 0px 30px 0px;
}

.font {
  font-weight: 450;
}

a:hover {
  text-decoration: underline;
}

.article {
  background: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);
  padding: 20px;
  /* min-height: 370px; */
  position: relative;
  display: block;
  /* display: inline-block; */
  min-width: 100%;
}

a {
  text-decoration: none;
}

.parrafo {
  font-weight: 400;
  font-size: 20px;
}
</style>