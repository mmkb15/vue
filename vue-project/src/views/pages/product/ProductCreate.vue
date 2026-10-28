<script setup lang="ts">
import { onMounted, ref } from "vue";
import PageHead from "../../../components/PageHead.vue";
import { defaultProduct } from "@/interfaces/Product.ts";
import type { Brand } from "@/interfaces/Brand.ts";
import type { Category } from "@/interfaces/Category.ts";
import { api } from "@/api.ts";
import { useRouter } from "vue-router";

const route = useRouter() ;
let product = ref(defaultProduct);
let brands = ref<Brand[]>([]);
let categories = ref<Category[]>([]);

function getAllCategories(){
  api.get('categories')
      .then((res:any)  => {
        // console.log(res.data);
        categories.value = res.data.categories;
      })
      .catch((err:any) => {
        console.log(err);
      })
}
function getAllBrands(){
  api.get('brands')
      .then((res:any)  => {
        // console.log(res.data);
        brands.value = res.data.brand;
      })
      .catch((err:any) => {
        console.log(err);
      })
}
onMounted(() => {
  getAllBrands();
  getAllCategories();
})
const handleSubmit = () => {
  // console.log(product.value);
  let formData = new FormData();
  formData.append('name', product.value.name);
  formData.append('category_id', product.value.category_id.toString());
  formData.append('brand_id', product.value.brand_id.toString());
  formData.append('price', product.value.price.toString());
  formData.append('quantity', product.value.quantity.toString());
  formData.append('active', product.value.active.toString());
  formData.append('reorder_level', product.value.reorder_level.toString());
  formData.append('description', product.value.description ? product.value.description : "");
  if(product.value.image) formData.append('image', product.value.image);


  api.post('products', formData, {
    headers: {'Content-Type': 'multipart/form-data'},
  })
  .then((res:any) => {
    console.log(res.data);
    route.push('/products');
  })
  .catch((err:any) => {
    console.log(err.response);
  })
};


function handleImage(event: any) {
  product.value.image = event.target.files[0] || null;
}
</script>

<template>
  <PageHead title="Product" subtitle="Create new item">
    <RouterLink class="btn-outline theme-accent" to="/products"
      ><i class="bi bi-arrow-left"></i> Back</RouterLink
    >
  </PageHead>

  <section class="section-gap">
    <div class="card">
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmit">
          <div class="row g-3">
            <div class="col-12 md:col-6">
              <div class="form-field">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="product.name"
                />
              </div>
            </div>
            <div class="col-12 md:col-6">
              <div class="form-field">
                <label class="form-label">Category</label>
                <select class="form-control" v-model="product.category_id">
                  <option value="" disabled>Select category...</option>
                  <option v-for="item in categories" :value="item.id">{{item.name}}</option>
                </select>
              </div>
            </div>
            <div class="col-12 md:col-6">
              <div class="form-field">
                <label class="form-label">Brand</label>
                <select class="form-control" v-model="product.brand_id">
                  <option value="" disabled>Select brand...</option>
                  <option v-for="item in brands" :value="item.id">{{item.name}}</option>
                </select>
              </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3">
              <div class="form-field">
                <label class="form-label">Price (৳)</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="product.price"
                />
              </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3">
              <div class="form-field">
                <label class="form-label">QTY</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="product.quantity"
                />
              </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3">
              <div class="form-field">
                <label class="form-label">Reorder level</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="product.reorder_level"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-field">
                <label class="form-label">Description (optional)</label>
                <textarea
                  class="form-control"
                  v-model="product.description"
                ></textarea>
              </div>
            </div>
            <div class="col-12">
              <div class="form-field">
                <label for="active">Image (optional)</label>
                <input
                  type="file"
                  class="form-control"
                  accept="image/*"
                  @change="handleImage"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-field">
                <input
                  type="checkbox"
                  id="active"
                  class="check"
                  v-model="product.active"
                />
                <label for="active">Is active</label>
              </div>
            </div>
            <div class="col-12 form-actions">
              <button type="submit" class="btn-solid theme-accent">
                <i class="bi bi-plus-lg"></i> Add New
              </button>
              <button type="reset" class="btn-outline theme-secondary">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
