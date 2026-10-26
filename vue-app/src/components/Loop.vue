<script setup lang="ts">
const  list = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
</script>

<template>
    <h2>Loop</h2>
    <ul>
        <li v-for="(item, index) in list" :key="index">
            {{ item }}
        </li>
    </ul>
</template>