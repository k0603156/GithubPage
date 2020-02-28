<template>
  <section class="py-3 px-4">
    <h2>Project</h2>
    <div>
      <fragment v-for="(project, index) in project_data" :key="index">
        <dl class="row">
          <dt class="col-sm-2">{{project.name}}</dt>
          <dd class="col-sm-10">
            <dl class="row" v-for="(value, sub_title) in project.body" :key="sub_title">
              <fragment v-if="valueIsArray(value)">
                <ProjectRenderer :sub_title="sub_title" :project_arr="value" />
              </fragment>
              <template v-else-if="valueIsObject(value)">
                <dt class="col-sm-2">{{ sub_title }}</dt>
                <dd class="col-sm-10">
                  <template v-for="(val, key) in value">
                    <ProjectRenderer :sub_title="key" :project_arr="val" :key="key" />
                  </template>
                </dd>
              </template>
              <fragment v-else-if="valueIsString(value)">
                <dt class="col-sm-2">{{sub_title}}</dt>
                <dd class="col-sm-10">{{value}}</dd>
              </fragment>
            </dl>
          </dd>
        </dl>
      </fragment>
    </div>
  </section>
</template>
<script>
import { Fragment } from "vue-fragment";
import ProjectRenderer from "./ProjectRenderer";
import ProjectsData from "@/data/project";
export default {
  components: {
    Fragment,
    ProjectRenderer
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
  methods: {
    valueIsArray: function(value) {
      return typeof value !== "undefined" && Array.isArray(value);
    },
    valueIsObject: function(value) {
      return typeof value !== "undefined" && typeof value === "object";
    },
    valueIsString: function(value) {
      return typeof value !== "undefined" && typeof value === "string";
    }
  }
};
</script>
