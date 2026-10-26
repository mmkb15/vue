<script setup lang="ts">
import { ref } from 'vue'
import heroImg from '../assets/hero.png'
import viteLogo from '../assets/vite.svg'
import vueLogo from '../assets/vue.svg'
import Child from './Child.vue'

const count = ref(0)
</script>

<template>
  <h1>Hello World Component</h1>
  <h1 class="heading">Scoped Styles</h1>
  <Child />
</template>
