<template>
  <div class="task-matrix">
    <h3>Mini Task Matrix Demo</h3>
    <div class="task-matrix-filters">
      <label>
        Show:
        <select v-model="priorityFilter">
          <option value="">All</option>
          <option value="high">High priority</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>
    </div>

    <ul class="task-list">
      <li
        v-for="task in filteredTasks"
        :key="task.title"
        class="task-item"
      >
        <strong>[{{ task.priority }}]</strong> {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const priorityFilter = ref('');

const tasks = [
  { title: 'Polish Unity safety demo', priority: 'high' },
  { title: 'Update research summary page', priority: 'medium' },
  { title: 'Add Bulgaria trip gallery', priority: 'low' }
];

const filteredTasks = computed(() => {
  if (!priorityFilter.value) return tasks;
  return tasks.filter(t => t.priority === priorityFilter.value);
});
</script>
