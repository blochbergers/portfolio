<template>
  <section class="collapsible">
    <button class="collapsible-header" @click="isOpen = !isOpen">
      <span>{{ title }}</span>
      <span class="collapsible-icon">
        {{ isOpen ? '-' : '+' }}
      </span>
    </button>
    <div v-if="isOpen" class="collapsible-body">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  initiallyOpen: {
    type: Boolean,
    default: false
  }
});

const isOpen = ref(props.initiallyOpen);
</script>
