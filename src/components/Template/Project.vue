<template>
  <section class="py-3 px-4">
    <h2>Project</h2>
    <div>
      <ProjectTable v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </section>
</template>
<script>
import ProjectTable from "@/components/Organisms/ProjectTable";
import ProjectsData from "@/data/project";
export default {
  components: {
    ProjectTable
  },
  data: function() {
    return { projects: ProjectsData["project"] };
  },
  computed: {},
  methods: {}
};
</script>
