<template>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
        <div class="container" data-aos="fade-up" style="width: 1000px;">
            <button type="button" class="btn btn-primary" @click="goBack()"><i class="bi bi-arrow-left"></i></button>
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-8">
                    <h1><span>{{ investigador.names }}</span></h1>
                    <p class="parrafo">{{ investigador.description }}</p>
                    <div class="row">
                        <div class="col-1"><a :href="investigador.linkedin" class="facebook" data-v-4896eafd="">
                                <h1><i class="bi bi-linkedin"></i></h1>
                            </a>
                        </div>
                        <div class="col-1"><a :href="investigador.CTI_Vitae" class="facebook" data-v-4896eafd="">
                                <h1><i class="bi bi-file-earmark-person"></i></h1>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <img :src="investigador.image" class="img-fluid rounded-circle" alt="">
                </div>
                <hr class="mt-5" style="color: #256FAE;">
            </div>

            <section id="blog" class="blog">
                <div class="container mt-2" data-aos="fade-up">
                    <div class="row mt-3">
                        <div class="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                            <div class="row gy-5 posts-list">
                                <div class="section-title mt-1 pb-0">
                                    <h3 class="text-start"><span><i class="bi bi-chevron-double-right"></i>
                                            Proyectos</span>
                                    </h3>
                                </div>
                                <div v-for="(proyecto, index) in proyectos" class="col-lg-6">
                                    <article class="d-flex flex-column article">
                                        <h2 class="title">
                                            <a>{{ proyecto.title }}</a>
                                        </h2>
                                        <div class="content">
                                            <p>
                                                {{ proyecto.description }}
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <div v-if="proyectos.length === 0">
                                    <p class="parrafo">No contiene informacion de proyecto.</p>
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
            </section>


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
const proyectos = ref([]);
const fetchData = async () => {
    try {
        const response = await axios.get('/src/assets/db/data.json');
        investigadores.value = response.data.investigadores;
        investigador.value = investigadores.value.find(inv => inv.inv_id === inv_id);
        proyectos.value = response.data.projects.filter(project => project.investigador === inv_id);
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

.font {
    font-weight: 450;
}

a {
    text-decoration: none;
}
</style>