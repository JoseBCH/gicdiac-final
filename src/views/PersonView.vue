<script setup>
import Person from '../components/about/Person.vue'
import { defineProps } from 'vue';
const props = defineProps({
  id: String
});
console.log(typeof props.id)
</script>

<template>
  <main id="main">
    <Person :id="props.id"/>
  </main>
</template>