<script setup lang="ts">
import './assets/style.css'
import Footer from './views/layouts/Footer.vue';
import Navbar from './views/layouts/Navbar.vue';
import Sidebar from './views/layouts/Sidebar.vue';
</script>

<template>
  <!-- ===== Desktop Sidebar ===== -->
  <Sidebar />



  <div class="main">

    <!-- ===== Navbar ===== -->
    <Navbar />

    <main class="content">


    <router-view />

       <!-- ===== Footer ===== -->
        <Footer />
    </main>
  </div>
</template>
