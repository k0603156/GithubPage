<template>
  <section class="py-3 px-4">
    <h2>Project</h2>
    <div>
      <ProjectTable
        v-for="(project, index) in project_data"
        :key="index"
        :name="project.name"
        :body="project.body"
      />
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
  computed: {
    project_data: function() {
      return this.projects.map(project => {
        const { name, ...body } = project;
        console.log({
          name,
          body
        });
        return {
          name,
          body
        };
      });
    }
  },
  methods: {}
};
</script>
