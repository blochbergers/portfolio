import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.css';

createApp(App)
  .use(router)
  .mount('#app');

const saved = localStorage.getItem("selected-theme");

if (saved === "90s") {
  document.documentElement.classList.add("theme-90s");

  // reapply random colors
  setTimeout(() => {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    document.querySelectorAll("body *").forEach(el => {
      el.style.color = colors[Math.floor(Math.random() * colors.length)];
    });
  }, 50);
}