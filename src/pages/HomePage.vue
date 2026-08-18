<template>
    <div class="page home-page">
        <section class="intro-section">
            <h2>Overview</h2>
            <p>
                Software developer and game/UX designer specializing in interactive experiences. Several years of proven experience in Unity.
            </p>
        </section>

        <section class="projects-section">
            <header class="section-header">
                <h2>Projects</h2>

                <div class="projects-header-right">
                    <ProjectFilterBar v-model="activeTech"
                                      :tech-options="techOptions" />
                </div>
            </header>

            <div class="projects-grid">
                <ProjectCard v-for="project in filteredProjects"
                             :key="project.id"
                             :project="project" />
            </div>
        </section>

        <section class="timeline-section">
            <h2>Timeline</h2>
            <Timeline :events="timelineEvents" />
        </section>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { projects } from '../data/projects';
    import { timelineEvents } from '../data/timeline';

    import ProjectCard from '../components/ProjectCard.vue';
    import ProjectFilterBar from '../components/ProjectFilterBar.vue';
    import Timeline from '../components/Timeline.vue';

    const activeTech = ref('');

    const techOptions = Array.from(
        new Set(projects.flatMap(p => p.tech))
    ).sort();

    const filteredProjects = computed(() => {
        if (!activeTech.value) return projects;
        return projects.filter(p => p.tech.includes(activeTech.value));
    });
</script>