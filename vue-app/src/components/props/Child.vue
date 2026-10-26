<script setup lang="ts">
import Img from "@/assets/vue.svg";
const alt = "Vue logo";

// defineProps<{
//   name: string;
//   age: number;
//   active: boolean;
// }>();

defineProps({
  name: String,
  roll: Number,
  active: Boolean,
});
</script>

<template>
  <article class="student-card">
    <header class="student-header">
      <img class="student-avatar" :src="Img" :alt="alt">
      <div class="student-details">
        <h3>{{ name || 'Unknown student' }}</h3>
        <p>Roll number {{ roll }}</p>
      </div>
      <span class="status" :class="{ 'status-active': active }">
        {{ active ? 'Active' : 'Inactive' }}
      </span>
    </header>

    <div v-if="$slots.default" class="student-extra">
      <slot />
    </div>
  </article>
</template>

<style scoped>
.student-card {
  min-width: 0;
  padding: 16px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.student-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.student-avatar {
  width: 42px;
  height: 42px;
  padding: 6px;
  object-fit: contain;
  background: rgba(65, 184, 131, 0.12);
  border-radius: 12px;
}

.student-details {
  min-width: 0;
  flex: 1;
  text-align: left;
}

.student-details h3 {
  overflow: hidden;
  margin: 0;
  color: var(--text-h);
  font-size: 14px;
  font-weight: 650;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.student-details p {
  margin-top: 3px;
  color: var(--text);
  font-size: 12px;
}

.status {
  padding: 5px 8px;
  color: var(--text);
  font-size: 11px;
  font-weight: 600;
  background: var(--code-bg);
  border-radius: 999px;
}

.status-active {
  color: #247a57;
  background: rgba(65, 184, 131, 0.14);
}

.student-extra {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}
</style>
