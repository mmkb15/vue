<script setup lang="ts">
import { ref } from 'vue';

    // const num = -10;

    const num = ref(0);
</script>

<template>
    <h2>Condition</h2>
    <p v-if="num > 0">Number : {{ num }} is positive</p>
    <p v-else-if="num < 0">Number : {{ num }} is negative</p>
    <p v-else>Number is zero</p>

    <div>
        <button @click="num++">Increment</button>
        <button @click="num--">Decrement</button>
    </div>

</template>