<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>  
  <body>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </body>
</template>

<style scoped>
  
</style>
