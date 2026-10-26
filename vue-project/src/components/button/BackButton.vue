<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
    to: string,
}>()
</script>



<template>
<RouterLink class="btn-outline theme-accent" :to="to"><i class="bi bi-arrow-left"></i>Back</RouterLink>

</template>