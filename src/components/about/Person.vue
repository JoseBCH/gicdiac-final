<template>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
        <div class="container" data-aos="fade-up" style="width: 1000px;">
            <button type="button" class="btn btn-primary" @click="goBack()"><i class="bi bi-arrow-left"></i></button>
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-8">
                    <h1><span>{{ investigador.names }}</span></h1>
                    <p class="parrafo">{{ investigador.description }}</p>
                </div>
                <div class="col-4">
                    <img :src="investigador.image" class="img-fluid rounded-circle" alt="">
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
                        {{ investigador.cv }}
                    </p>
                </div>

                <div class="col-lg-1 col-md-6 footer-links justify-content-center" data-v-4896eafd="">
                    <div class="social-links mt-3" data-v-4896eafd=""><a :href="investigador.linkedin" class="facebook"
                            data-v-4896eafd="">
                            <h1><i class="bi bi-linkedin"></i></h1>
                        </a>
                    </div>
                    <div class="social-links mt-3" data-v-4896eafd=""><a :href="investigador.CTI_Vitae" class="facebook"
                            data-v-4896eafd="">
                            <h1><i class="bi bi-file-earmark-person"></i></h1>
                        </a>
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
        const response = await axios.get('/src/assets/db/data.json');
        investigadores.value = response.data.investigadores;
        investigador.value = investigadores.value.find(inv => inv.inv_id === inv_id);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const goBack = () => {
    // Acceder a $router aquí
    if (window.history.length > 1) {
                window.history.go(-1);
            } else {
                // Si no hay historial, redirigir a una ruta predeterminada
                // Puedes cambiar '/' por la ruta que desees
                window.location.href = '/';
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