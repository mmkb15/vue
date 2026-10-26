import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/pages/Dashboard.vue";
import ProductManage from "./views/pages/product/ProductManage.vue";
import UserManage from "./views/pages/user/UserManage.vue";
import ProductCreate from "./views/pages/product/ProductCreate.vue";

const routes = [
    { path: '/', component: Dashboard},
    { path: '/users', component: UserManage},
    { path: '/users-create', component: UserManage},
    { path: '/products', component: ProductManage},
    { path: '/products-create', component: ProductCreate },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
