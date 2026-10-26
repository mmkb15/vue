<script setup lang="ts">
    const num = -10;
</script>

<template>
    <h2>Condition</h2>
    <p v-if="num > 0">Number : {{ num }} is positive</p>
    <p v-else-if="num < 0">Number : {{ num }} is negative</p>
    <p v-else>Number is zero</p>

</template>