<script setup lang="ts">
import AddButton from '../../../components/button/AddButton.vue';
import PageHead from '../../../components/PageHead.vue';
</script>

<template>
    <PageHead title="User" subtitle="Manage your users">
        <AddButton to="/users-create"/>
    </PageHead>
</template>