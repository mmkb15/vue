<script setup lang="ts">
import AddButton from "@/components/button/AddButton.vue";
import PageHead from "@/components/PageHead.vue";
import { api, baseUrl } from "@/api.ts";
import { onMounted, ref } from "vue";
import { type Product } from "@/interfaces/Product";
import { RouterLink } from "vue-router";


let products  = ref<Product[]>([]);
let pageLinks     = ref<any[]>([]);
// console.log(products);
function getAllProducts(url: string){
  api.get(url)
      .then((res: any) => {
        // console.log(res.data.products);
        products.value  = res.data.products.data;
        pageLinks.value     = res.data.products.links;
        console.log(pageLinks);
      })
      .catch((err: any) => {
        console.log(err.response.data);
      })
}
// getAllProducts('products');
onMounted(()=> {
  getAllProducts('products');
})

// function handlePagination(pg: string){
//   alert(pg);
// }
</script>

<template>
  <PageHead title="Product" subtitle="Manage your products">
    <AddButton to="/products-create" />
  </PageHead>

  <section class="section-gap">
    <div class="card">
      <div class="card-body">
        <!-- <div class="table-head">
          <h5 class="card-title">Recent orders</h5>
          <span class="muted small">5 orders</span>
        </div> -->
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Price</th>
                <th>QTY</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.id">
                <td>{{item.id}}</td>
                <td>
                  <div class = "item-img">
                    <img v-if="item.image" :src="`${baseUrl}${item.image}`" width='40' height="40" class="rounded" :alt="item.name" />
                    <img v-else :src="`https://placehold.co/400`" width='40' height="40" class="rounded" :alt="item.name" />
                  </div>
                  <strong>{{item.name}}</strong>
                </td>
                <td>{{item.price}}</td>
                <td>
                    {{item.quantity}}
                </td>
                <td>
                  <span 
                    class="badge badge-subtle" 
                    :class="item.active ? 'theme-success' : 'theme-danger'"
                  >
                  {{item.active ? "Active" : "Inactive"}}
                  </span>
                </td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Accent theme example"
                  >
                    <RouterLink :to="`/products/${item.id}`" class="btn-outline theme-secondary">
                      <i class="bi bi-eye"></i>
                    </RouterLink>
                    <button type="button" class="btn-outline theme-secondary">
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button type="button" class="btn-outline theme-secondary">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                  <td colspan="3" class="fg-4">10 items out of 100</td>
                  <td colspan="3">
                      <nav aria-label="Page navigation example">
                          <ul class="pagination theme-accent justify-content-end mb-0">

                              <li v-for="link in pageLinks" class="page-item" :class="link.active ? 'active' : ''">
                                <div class="page-link" role="button" :class="link.page == null ? 'disabled' : ''" @click="getAllProducts(link.url)">
                                  <span v-html="link.label"></span>
                                </div>
                              </li>

                          </ul>
                      </nav>
                  </td>
              </tr>
             </tfoot>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
