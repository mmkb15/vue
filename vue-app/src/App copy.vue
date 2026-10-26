<script setup lang="ts">
import { ref } from 'vue';
import Child from './components/Child.vue';
import HelloWorld from './components/HelloWorld.vue'

const name = 'Mina';
const age = 12;
const count = ref(0);
function test() {
  alert('Hi');
}
const test2 = () => {
  alert('Hi 2');
} 
</script>

<template>
  <HelloWorld />
   <h1 class="heading">Welcome to Your Vue.js + TypeScript App</h1>
   <p>
    For a guide and recipes on how to configure / customize this project,<br>
    check out the
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <Child />
    <div>
      <p>Name : {{ name }}</p>
      <p>Age : {{ age * 10 }}</p>
      <button @click="test">Test</button>
      <button @click="test2">Test 2</button>
    </div>
    <div>
      <button @click="count--">-</button>
      <span>{{ count }}</span>
      <button @click="count++">+</button> 
    </div>
</template>
<style scoped>
  .heading {
    color: #42b983;
  }
</style>