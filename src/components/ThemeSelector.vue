<template>
  <div v-if="show" class="theme-popup">
    <h2>What year is it?</h2>

    <button @click="select2020s">It is the 2020’s (I just want to see the content)</button>

    <button @click="select90s">It is the 1990’s (I'm feeling a little silly)</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(!localStorage.getItem("selected-theme"));

function apply90sColors() {
  const colors = ["red", "orange", "green", "blue", "purple"];
  document.querySelectorAll("body *").forEach(el => {
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
  });
}

function select2020s() {
  document.documentElement.classList.remove("theme-90s");
  localStorage.setItem("selected-theme", "2020s");
  show.value = false;
}

function select90s() {
  document.documentElement.classList.add("theme-90s");
  localStorage.setItem("selected-theme", "90s");

  setTimeout(() => apply90sColors(), 50);

  show.value = false;
}
</script>

<style scoped>
.theme-popup {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  z-index: 99999;
  color: white;
}

button {
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  border: none;
  border-radius: 8px;
}

button:nth-child(2) {
  background: #4f46e5;
  color: white;
}

button:nth-child(3) {
  background: #ec4899;
  color: white;
}
</style>