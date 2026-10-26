<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <aside class="sidebar bg-1 border-end">
    <a class="brand" href="index.html"
      ><i class="bi bi-bar-chart-fill"></i> AdminPro</a
    >
    <nav class="side-nav">
      <RouterLink class="side-link" to="/" exact-active-class="active">
        <i class="bi bi-speedometer2"></i>
        Dashboard
      </RouterLink>

      <RouterLink class="side-link" to="/users" :class="{active:route.path.startsWith('/users')}">
        <i class="bi bi-people"></i>
        Users
      </RouterLink>

      <RouterLink class="side-link" to="/products" :class="{active:route.path.startsWith('/products')}">
        <i class="bi bi-box-seam"></i>
        Products
      </RouterLink>
    </nav>
  </aside>

  <!-- ===== Mobile Sidebar (Bootstrap Drawer) ===== -->
  <dialog
    class="drawer drawer-start"
    id="mobileSidebar"
    tabindex="-1"
    aria-labelledby="mobileSidebarLabel"
  >
    <div class="drawer-header">
      <h5 class="drawer-title" id="mobileSidebarLabel">AdminPro</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="drawer"
        aria-label="Close"
      ></button>
    </div>
    <div class="drawer-body side-nav">
      <RouterLink class="side-link" to="/" exact-active-class="active">
        <i class="bi bi-speedometer2"></i>
        Dashboard
      </RouterLink>

      <RouterLink class="side-link" to="/users" active-class="active">
        <i class="bi bi-people"></i>
        Users
      </RouterLink>

      <RouterLink class="side-link" to="/products" active-class="active">
        <i class="bi bi-box-seam"></i>
        Products
      </RouterLink>
    </div>
  </dialog>
</template>
