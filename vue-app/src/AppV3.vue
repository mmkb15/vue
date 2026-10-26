<script lang="ts">
import Child from './components/Child.vue';
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    Child,
    HelloWorld
  },
  
  setup() {
    return {
      name: 'Mina',
      age: 12,
      test: function() {
        alert('Hi');
      },
      test2: () => {
        alert('Hi 2');
      },
    }
  }




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
    <p>Name : {{ name }}</p>
    <p>Age : {{ age * 10 }}</p>
    <button @click="test">Test</button>
    <button @click="test2">Test 2</button>
    <Child />
</template>
<style scoped>
  .heading {
    color: #42b983;
  }
</style>