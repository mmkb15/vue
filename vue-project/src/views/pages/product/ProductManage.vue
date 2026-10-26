<script setup lang="ts">
import AddButton from "@/components/button/AddButton.vue";
import PageHead from "@/components/PageHead.vue";
import { api } from "@/api.ts";

function getAllProducts(){
  api.get('products')
      .then((res: any) => {
        console.log(res.data.products.data);
      })
      .catch((err: any) => {
        console.log(err.response.data);
      })
}
getAllProducts();
</script>

<template>
  <PageHead title="Product" subtitle="Manage your products">
    <AddButton to="/products-create" />
  </PageHead>

  <section class="section-gap">
    <div class="card">
      <div class="card-body">
        <div class="table-head">
          <h5 class="card-title">Recent orders</h5>
          <span class="muted small">5 orders</span>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1001</td>
                <td>
                  <strong>Rahim Uddin</strong>
                  <div class="muted small">rahim@example.com</div>
                </td>
                <td>Polo Shirt</td>
                <td>৳1,200</td>
                <td>
                  <span class="badge badge-subtle theme-success"
                    >Completed</span
                  >
                </td>
                <td>2026-10-18</td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Accent theme example"
                  >
                    <button type="button" class="btn-outline theme-secondary">
                      <i class="bi bi-eye"></i>
                    </button>
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
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
