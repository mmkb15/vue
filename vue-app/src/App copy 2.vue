<script setup lang="ts">
import ConditionReactive from './components/ConditionReactive.vue';
import Form from './components/Form.vue';
// import Child from './components/props/Child.vue';
import Parent from './components/props/Parent.vue';



</script>

<template>
  <main class="page-shell">
    <header class="page-heading">
      <span class="eyebrow">WELCOME</span>
      <h1>Create your account</h1>
      <p>A few details to get started. Your student information is shown alongside.</p>
    </header>

    <div class="page-content">
      <Form />
      <Parent />
    </div>
  </main>
</template>
<style scoped>
.page-shell {
  --accent: #41b883;

  box-sizing: border-box;
  flex: 1;
  width: 100%;
  padding: 64px 40px;
  background:
    radial-gradient(ellipse at 12% 5%, rgba(65, 184, 131, 0.12), transparent 34%),
    var(--code-bg);
}

.page-heading {
  max-width: 1040px;
  margin: 0 auto 36px;
  text-align: left;
}

.eyebrow {
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.page-heading h1 {
  margin: 10px 0 8px;
  color: var(--text-h);
  font-size: clamp(30px, 4vw, 42px);
  font-weight: 650;
  letter-spacing: -1.3px;
}

.page-heading p {
  color: var(--text);
  font-size: 16px;
}

.page-content {
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.1fr);
  align-items: start;
  gap: 28px;
  max-width: 1040px;
  margin: 0 auto;
}

@media (max-width: 760px) {
  .page-shell {
    padding: 40px 20px;
  }

  .page-heading {
    margin-bottom: 24px;
  }

  .page-content {
    grid-template-columns: 1fr;
    gap: 22px;
  }
}
</style>