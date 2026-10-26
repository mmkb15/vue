<script setup lang="ts">
import { reactive, ref } from 'vue';

const user = ref({
  name: 'Mina',
  age: 12
});

function changeName() {
  user.value.name = 'Raju';
}
const student = reactive({
  name: 'Jone doe',
  age: 32
});

function changeStuName() {
  student.name = 'Rani';
  console.log(student.name);
}
</script>

<template>
  <div>
    <p>Name : {{ user.name }}</p>
    <p>Age : {{ user.age }}</p>
    <button @click="changeName">Change Name</button>
  </div>
  <div>
    <p>Name : {{ student.name }}</p>
    <p>Age : {{ student.age }}</p>
    <button @click="changeStuName">Change Name</button>
  </div>
  <!-- <button @click="user.name = 'Raju'">Change Name</button> -->
</template>
<style scoped>
  .heading {
    color: #42b983;
  }
</style>