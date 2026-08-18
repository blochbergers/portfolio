<template>
  <div class="filter-bar">
    <label class="filter-label" for="tech-select">
      Filter by technology:
    </label>
    <select
      id="tech-select"
      class="filter-select"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="">All</option>
      <option
        v-for="tech in techOptions"
        :key="tech"
        :value="tech"
      >
        {{ tech }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  techOptions: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);
</script>
