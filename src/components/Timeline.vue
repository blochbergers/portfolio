<template>
  <div class="timeline">
    <div
      v-for="event in events"
      :key="event.year + event.title"
      class="timeline-item"
    >
      <div class="timeline-year">{{ event.year }}</div>
      <div class="timeline-content">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
	  <!-- Show download link if file exists -->
  	<a 
 	   v-if="event.file" 
 	   :href="event.file"
 	   download
 	   class="download-link"
	  >
	    Download PDF
	  </a>
	<!-- Show web link if file exists -->
  	<a 
 	   v-if="event.link" 
 	   :href="event.link"
 	   class="web-link"
	  >
	    View Link
	  </a>
	<p>----------------------------------------------------------------------------------------</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  events: {
    type: Array,
    required: true
  }
});
</script>
