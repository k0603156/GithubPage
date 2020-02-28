<template>
  <fragment>
    <dt class="col-sm-2">{{sub_title}}</dt>
    <dd class="col-sm-10">
      <template v-for="(item, index) in project_arr">
        <template v-if="valueIsArray(item)">
          <ProjectRenderer :sub_title="index" :project_arr="item" :key="index" />
        </template>

        <template v-else-if="valueIsObject(item)">
          <template v-for="(val, key) in item">
            <ProjectRenderer :sub_title="key" :project_arr="val" :key="key" />
          </template>
        </template>

        <span v-else-if="valueIsString(item)" :key="index">{{item}}</span>
      </template>
    </dd>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";

export default {
  name: "ProjectRenderer",
  props: {
    sub_title: String,
    project_arr: Array
  },
  components: {
    Fragment
  },
  data: function() {
    return { sub_title: this.sub_title, project_arr: this.project_arr };
  },
  computed: {},
  methods: {
    valueIsObject: function(value) {
      return (
        typeof value !== "undefined" &&
        typeof value === "object" &&
        !Array.isArray(value)
      );
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
