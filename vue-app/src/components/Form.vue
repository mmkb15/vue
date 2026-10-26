<script setup lang="ts">
import { reactive } from 'vue';
import { defaultStudent } from '../Students';

const stu = reactive(defaultStudent);

function handleSubmit(){
    console.log(stu);
}

</script>

<template>
  <form class="registration-form" @submit.prevent="handleSubmit">
    <h2>Registration Form</h2>
    <p class="form-description">Create an account to get started.</p>

    <div class="form-fields">
        <label for="id">Id</label>
        <input id="id" name="id" type="id" placeholder="#01" autocomplete="id" v-model="stu.id">
        
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" autocomplete="name" v-model="stu.name">

        <label for="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Enter your email" autocomplete="email" v-model="stu.email">

        <label class="active-field" for="active">
          <input id="active" name="active" type="checkbox" value="true"  v-model="stu.active">
          <span>Is Active</span>
        </label>
    </div>

    <button type="submit">Create account</button>
  </form>
</template>

<style scoped>
.registration-form {
  --accent: #41B883;
  --accent-bg: rgba(65, 184, 131, 0.16);
  --accent-border: rgba(65, 184, 131, 0.55);

  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 32px;
  text-align: left;
  color: var(--text);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow);
}

h2 {
  margin: 0;
  color: var(--text-h);
  font-size: 26px;
  letter-spacing: -0.5px;
}

.form-description {
  margin-top: 8px;
  color: var(--text);
  font-size: 15px;
}

.form-fields {
  display: grid;
  gap: 9px;
  margin: 24px 0;
}

label {
  color: var(--text-h);
  font-size: 14px;
  font-weight: 600;
}

input {
  box-sizing: border-box;
  width: 100%;
  min-height: 46px;
  margin-bottom: 8px;
  padding: 11px 13px;
  color: var(--text-h);
  font: inherit;
  font-size: 15px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: border-color 150ms ease, box-shadow 150ms ease;
}

input::placeholder {
  color: var(--text);
  opacity: 0.75;
}

input:focus-visible {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-bg);
}

.active-field {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  margin-top: 4px;
  cursor: pointer;
}

.active-field input {
  width: 18px;
  min-height: 18px;
  margin: 0;
  padding: 0;
  accent-color: var(--accent);
}

.active-field input:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  box-shadow: none;
}

button {
  width: 100%;
  min-height: 46px;
  padding: 11px 16px;
  color: #fff;
  font: inherit;
  font-size: 15px;
  font-weight: 600;
  background: var(--accent);
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: filter 150ms ease, transform 150ms ease;
}

button:hover {
  filter: brightness(1.08);
}

button:active {
  transform: translateY(1px);
}

button:focus-visible {
  outline: 3px solid var(--accent-border);
  outline-offset: 3px;
}

@media (max-width: 480px) {
  .registration-form {
    padding: 24px;
  }
}
</style>
