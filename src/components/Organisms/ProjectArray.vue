<template>
  <fragment>
    <dt class="col-sm-12">{{sub_title}}</dt>
    <dd class="col-sm-12">
      <template v-for="(item, index) in project_arr">
        <template v-if="valueIsObject(item)">
          <ProjectObject :project_obj="item" :key="index" />
        </template>

        <template v-if="valueIsArray(item)">
          <ProjectArray sub_title="ss" :project_arr="item" :key="index" />
        </template>

        <span v-else :key="index">{{item}}</span>
      </template>
    </dd>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import ProjectObject from "./ProjectObject";

export default {
  name: "ProjectArray",
  props: {
    sub_title: String,
    project_arr: Array
  },
  components: {
    Fragment,
    ProjectObject
  },
  data: function() {
    return { sub_title: this.sub_title, project_arr: this.project_arr };
  },
  computed: {},
  methods: {
    valueIsObject: function(value) {
      return typeof value !== "undefined" && typeof value === "object";
    },
    valueIsArray: function(value) {
      return typeof value !== "undefined" && Array.isArray(value);
    },
    valueIsString: function(value) {
      return typeof value !== "undefined" && typeof value === "string";
    }
  }
};
</script>
