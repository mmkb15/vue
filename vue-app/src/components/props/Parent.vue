<script setup lang="ts">
import Student from './Child.vue';

</script>

<template>
  <section class="student-panel">
    <header class="panel-heading">
      <div>
        <h2>Student overview</h2>
        <p>Student information</p>
      </div>
      <span class="student-count">3 students</span>
    </header>

    <div class="student-list">
      <Student :roll="10" :active="true">
        <h4>Profile image</h4>
        <img class="profile-image" src="https://i.pravatar.cc/300" alt="Student profile">
      </Student>
      <Student name="Jone Doe" :roll="12" :active="true" />
      <Student name="" :roll="13" :active="false" />
    </div>
  </section>
</template>

<style scoped>
.student-panel {
  padding: 28px;
  color: var(--text);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
  text-align: left;
}

.panel-heading h2 {
  margin: 0;
  color: var(--text-h);
  font-size: 20px;
  letter-spacing: -0.3px;
}

.panel-heading p {
  margin-top: 4px;
  font-size: 14px;
}

.student-count {
  padding: 6px 10px;
  color: #247a57;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  background: rgba(65, 184, 131, 0.14);
  border-radius: 999px;
}

.student-list {
  display: grid;
  gap: 12px;
}

.profile-image {
  display: block;
  width: 100%;
  max-width: 160px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 10px;
}

h4 {
  margin: 0 0 8px;
  color: var(--text);
  font-size: 12px;
  font-weight: 600;
}
</style>