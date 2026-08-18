<<template>
  <RouterLink
    :to="project.link"
    class="project-card"
  >
    <h3 class="project-title">
      {{ project.title }}
    </h3>

    <p class="project-description">
      {{ project.shortDescription }}
    </p>

    <div class="project-tags">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="tag-pill"
      >
        {{ tag }}
      </span>
    </div>

    <p class="project-role">
      {{ project.role }}
    </p>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>
