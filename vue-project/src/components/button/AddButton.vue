<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
    to: string,
}>()
</script>



<template>
<RouterLink class="btn-solid theme-accent" :to="to"><i class="bi bi-plus-lg"></i> Add order</RouterLink>

</template>