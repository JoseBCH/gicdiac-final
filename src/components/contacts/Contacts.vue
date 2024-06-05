<template>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h3><span>Contáctanos</span></h3>
                <p>¡Estamos deseando escucharte! Si tienes alguna pregunta, sugerencia o estás interesado en colaborar
                    con nosotros, no dudes en contactarnos.</p>
            </div>

            <div class="row" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-6">
                    <div class="info-box mb-4">
                        <i class="bx bx-map"></i>
                        <h3>Dirección</h3>
                        <p>Calle Juan XXIII Nº 391 Ciudad Universitaria, Lambayeque</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="info-box  mb-4">
                        <i class="bx bx-envelope"></i>
                        <h3>Correo Electrónico</h3>
                        <p>gicdiac@unprg.edu.pe</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="info-box  mb-4">
                        <i class="bx bxl-facebook"></i>
                        <h3>Facebook</h3>
                        <p><a href="https://www.facebook.com/GICDIAC/" target="_blank" class="facebook">GICDIAC</a></p>
                    </div>
                </div>

            </div>

            <div class="row" data-aos="fade-up" data-aos-delay="100">

                <div class="col-lg-6 ">
                    <iframe class="mb-4 mb-lg-0"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15850.030111544575!2d-79.9042231!3d-6.7077407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ced9307db00dd%3A0xd82bb63ce69b1c52!2sUniversidad%20Nacional%20Pedro%20Ruiz%20Gallo!5e0!3m2!1ses!2spe!4v1713392438965!5m2!1ses!2spe"
                        frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe>
                </div>

                <div class="col-lg-6">
                    <form @submit.prevent="handleSubmit" class="php-email-form">
                        <div v-if="sentMessage" class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{{ sentMessage }}</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div v-if="errorMessage" class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{{ errorMessage }}</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div class="row">
                            <div class="col form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Nombre"
                                    required>
                            </div>
                            <div class="col form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Email"
                                    required>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto"
                                required>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message" rows="5" placeholder="Mensaje"
                                required></textarea>
                        </div>
                        <div class="text-center"><button type="submit">Enviar</button></div>
                    </form>
                </div>
            </div>
        </div>
    </section><!-- End Contact Section -->
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Definir las variables reactivas
const loading = ref(false);
const errorMessage = ref('');
const sentMessage = ref('');

const handleSubmit = async (event) => {
    loading.value = true;
    errorMessage.value = '';
    sentMessage.value = '';

    const formData = new FormData(event.target);

    try {
        const response = await axios.post('https://formspree.io/f/mrgnwjzv', formData, {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.status === 200) {
            sentMessage.value = 'Su mensaje ha sido enviado correctamente. Gracias!';
            // Resetear el formulario
            event.target.reset();
        } else {
            errorMessage.value = 'Error al enviar el mensaje. Por favor, inténtelo de nuevo.';
        }
    } catch (error) {
        errorMessage.value = 'Error al conectar con el servicio. Por favor, inténtelo de nuevo.';
    } finally {
        loading.value = false;
    }
};
</script>