<template>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
        <div class="container" data-aos="fade-up" style="width: 1000px;">

            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-8">
                    <h1><span>Ingeniero</span></h1>
                    <p class="parrafo">¡Estamos deseando escucharte! Si tienes alguna pregunta, sugerencia o estás
                        interesado en
                        colaborar con nosotros, no dudes en contactarnos.</p>
                </div>
                <div class="col-4">
                    <img src="../../assets/img/team/team-1.png" class="img-fluid rounded-circle" alt="">
                </div>
                <hr class="mt-5" style="color: #256FAE;">
            </div>

            <div class="row mt-3">
                <div class="col-lg-3">
                    <h5>Temas de investigación</h5>
                        <p><i class="bi bi-check-square-fill"></i> Tema 1</p>
                        <p><i class="bi bi-check-square-fill"></i> Tema 2</p>
                        <p><i class="bi bi-check-square-fill"></i> Tema 3</p>
                </div>

                <div class="col-lg-8 col-md-6">
                    <p class="cv">
                        Profesora del Departamento Académico de Administración y miembro del Centro de Investigación de
                        la Universidad del Pacífico. Es doctora en Gestión Estratégica con mención en Gestión
                        Empresarial y Sostenibilidad por el Consorcio de Universidades (Perú), magíster en Ingeniería
                        Industrial por la Universidad Ricardo Palma, e ingeniera industrial por la Universidad de Lima,
                        con Especialización Internacional en Gestión de la Innovación por ESAN y Ramon Llull (España).

                        Docente pregrado y posgrado en diferentes universidades, conferencista, investigadora RENACYT,
                        consultora y autora de publicaciones científicas y técnicas nacionales e internacionales.

                        Es presidenta de los Comités Técnicos de Normalización (CTN) de Investigación, Desarrollo
                        Tecnológico e Innovación, y del de Gestión de la MIPYME. Miembro de los CTN Textil y
                        Confecciones, y Aseguramiento de la Calidad de INACAL. Representante del Perú ante los comités
                        internacionales ISO/TC 279/WG1 Innovation Management system; ISO/TMB Environmental, Social,
                        Governance (ESG) y ISO/TC 133 Clothing sizing systems-size designation, size measurement methods
                        and digital fittings.

                        Ha desempeñado diversos cargos ejecutivos en empresas de manufactura. Es directora en The
                        Academy of Latin American Business and Sustainability Studies (ALBUS). Miembro profesional de la
                        Asociación Internacional de la Alpaca, la Asociación Latino-Iberoamericana de Gestión
                        Tecnológica y de la Innovación, la Asociación de Moda Sostenible, y del Cluster de Moda
                        Sostenible.
                    </p>
                </div>

                <div class="col-lg-1 col-md-6 footer-links justify-content-center" data-v-4896eafd="">
                    <div class="social-links mt-3" data-v-4896eafd=""><a href="https://www.facebook.com/jvillegas80"
                            class="facebook" data-v-4896eafd=""><h1><i class="bi bi-facebook"></i></h1></a>
                    </div>
                    <div class="social-links mt-3" data-v-4896eafd=""><a href="https://www.linkedin.com/in/juan-villegas-cubas-525451224/"
                            class="facebook" data-v-4896eafd=""><h1><i class="bi bi-linkedin"></i></h1></a>
                    </div>
                    <div class="social-links mt-3" data-v-4896eafd=""><a href="https://www.linkedin.com/in/juan-villegas-cubas-525451224/"
                            class="facebook" data-v-4896eafd=""><h1><i class="bi bi-file-earmark-person"></i></h1></a>
                    </div>
                </div>

            </div>


        </div>
    </section><!-- End Contact Section -->
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { defineProps } from 'vue';

const props = defineProps({
  id: String
});

const inv_id = parseInt(props.id)
const investigadores = ref([]);
const investigador = ref({});
const fetchData = async () => {
  try {
    const response = await axios.get('src/assets/db/data.json');
    investigadores.value = response.data.investigadores;
    console.log(investigadores);
    investigador.value = investigadores.find(inv => inv.inv_id === inv_id);
    console.log(investigador);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


onMounted(() => {
  fetchData();
});

</script>

<style scoped>
.parrafo {
    font-weight: 400;
    font-size: 23px;
}

.cv {
    text-align: justify;
}
</style>