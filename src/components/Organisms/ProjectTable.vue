<template>
  <fragment>
    <dl class="row">
      <dt class="col-sm-2">{{name}}</dt>
      <dd class="col-sm-10">
        <dl class="row" v-for="(value, sub_title) in body" :key="sub_title">
          <fragment v-if="valueIsString(value)">
            <dt class="col-sm-12">{{sub_title}}</dt>
            <dd class="col-sm-12">{{value}}</dd>
          </fragment>
          <fragment v-else-if="valueIsArray(value)">
            <ProjectArray :sub_title="sub_title" :project_arr="value" />
          </fragment>
          <fragment v-else-if="valueIsObject(value)">
            <dt class="col-sm-12">{{sub_title}}</dt>
            <dd class="col-sm-12">
              <ProjectObject :project_obj="value" />
            </dd>
          </fragment>
        </dl>
      </dd>
    </dl>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import ProjectObject from "./ProjectObject";
import ProjectArray from "./ProjectArray";

export default {
  props: {
    project: Object
  },
  components: {
    Fragment,
    ProjectObject,
    ProjectArray
  },
  data: function() {
    const {
      name,
      stack,
      collaborator,
      definition,
      url,
      dependency_projects
    } = this.project;
    return {
      name,
      body: {
        stack,
        collaborator,
        definition,
        url,
        dependency_projects
      }
    };
  },
  computed: {
    infoOne: function() {
      return Object.entries(this.body).map(
        ([key, value]) => typeof value !== "undefined" && Array.isArray(value)
      );
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
