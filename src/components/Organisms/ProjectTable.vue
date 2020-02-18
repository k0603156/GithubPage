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
            <ProjectRenderer :sub_title="sub_title" :project_arr="value" />
          </fragment>
        </dl>
      </dd>
    </dl>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import ProjectRenderer from "./ProjectRenderer";

export default {
  props: {
    name: String,
    body: Object
  },
  components: {
    Fragment,
    ProjectRenderer
  },
  data: function() {
    const { name, ...body } = this.project;
    return {
      name,
      body
    };
  },
  computed: {},
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
