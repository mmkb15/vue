<script setup lang="ts">
import { api, baseUrl } from '@/api';
import BackButton from '@/components/button/BackButton.vue';
import PageHead from '@/components/PageHead.vue';
import { defaultProduct } from '@/interfaces/Product';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const id = useRoute().params.id;
let item = ref(defaultProduct);

function getItem() {
    api.get(`products/${id}`)
        .then(res => {
            console.log(res.data);
            item.value = res.data.product;
            
        })
        .catch(err => {
            console.log(err.response.data);
        })
}
onMounted(() => {
    getItem();
})
</script>

<template>
    <PageHead title="Product Details" subtitle=" Your products detials">
        <BackButton to="/products" />
  </PageHead>

<section class="section-gap">
    <div class="card">
        <div class="card-body">


        <hr class="mb-4">

        <div class="row g-4">

            <!-- Product Image -->
            <div class="col-12 md:col-4">
            <div class="card h-100">
                <div class="card-body text-center">

                <!-- <img
                    src="assets/images/product-placeholder.png"
                    alt="Product image"
                    class="img-fluid rounded mb-3"
                    style="width: 100%; max-height: 280px; object-fit: contain;"
                > -->
                <label class="form-label fw-semibold">
                    Product Image
                </label>

                <!-- <div class="border rounded p-3 text-center">
                    <img v-if="item.image" :src="${baseUrl}${item.image}" :alt="@item.name" class="img-fuid rounded" style="max-height:180px">
                    <img v-else src="https://placehold.co/400x400" alt="Product image" class="img-fluid rounded"
                        style="max-height: 280px; object-fit: contain;">
                </div> -->

                 <div class="border rounded p-3 text-center">
                    <img v-if="item.image" :src="`${baseUrl}${item.image}`" :alt="item.name" class="img-fluid rounded" style="max-height: 280px; object-fit: contain;">
                    
                    <img v-else src="https://placehold.co/400x400" alt="Product image" class="img-fluid rounded"
                    style="max-height: 280px; object-fit: contain;">
                </div>

                <h5 class="mb-2">Classic Polo Shirt</h5>

                <span class="badge" :class="item.active ? 'bg-success' : 'bg-danger'">{{item.active ? 'In Stock' : 'Out of Stock'}}</span>

                <hr>

                <p class="text-muted mb-1">Product ID</p>
                <h6>{{item.id}}</h6>

                </div>
            </div>
            </div>

            <!-- Product Information -->
            <div class="col-12 md:col-8">

            <div class="card mb-3">
                <div class="card-body">
                <h5 class="mb-3">
                    <i class="bi bi-info-circle"></i>
                    General Information
                </h5>

                <div class="row g-3">

                    <div class="col-12 md:col-6">
                    <p class="text-muted mb-1">Product Name</p>
                    <h6>{{item.name}}</h6>
                    </div>

                    <div class="col-12 md:col-6">
                    <p class="text-muted mb-1">Price</p>
                    <h6>৳ {{item.price}}</h6>
                    </div>

                    <div class="col-12 md:col-6">
                    <p class="text-muted mb-1">Category</p>
                    <h6>{{ item.category.name }}</h6>
                    <small class="text-muted">Category ID: 1</small>
                    </div>

                    <div class="col-12 md:col-6">
                    <p class="text-muted mb-1">Brand</p>
                    <h6>{{ item.brand.name }}</h6>
                    <small class="text-muted">Brand ID: 1</small>
                    </div>

                    <div class="col-12">
                    <p class="text-muted mb-1">Description</p>
                    <p class="mb-0">
                        {{item.description}}
                    </p>
                    </div>

                </div>
                </div>
            </div>

            <!-- Inventory Information -->
            <div class="card">
                <div class="card-body">
                <h5 class="mb-3">
                    <i class="bi bi-box-seam"></i>
                    Inventory Information
                </h5>

                <div class="row g-3">

                    <div class="col-12 md:col-6">
                    <div class="border rounded p-3">
                        <p class="text-muted mb-1">Available Quantity</p>
                        <h4 class="mb-0">{{item.quantity}} <small>units</small></h4>
                    </div>
                    </div>

                    <div class="col-12 md:col-6">
                    <div class="border rounded p-3">
                        <p class="text-muted mb-1">Reorder Level</p>
                        <h4 class="mb-0">{{item.reorder_level}} <small>units</small></h4>
                    </div>
                    </div>

                    <div class="col-12">
                    <p class="text-muted mb-1">Stock Status</p>
                    <span class="badge" :class="item.active ? 'bg-success' : 'bg-danger'">
                        <i class="bi bi-check-circle"></i> {{item.active ? 'In Stock' : 'Out of Stock'}}
                    </span>
                    </div>

                </div>
                </div>
            </div>

            </div>
        </div>

        </div>
    </div>
</section>
</template>