<template>
  <fragment>
    <dt class="col-sm-12">{{sub_title}}</dt>
    <dd class="col-sm-12">
      <dl class="row">
        <fragment v-for="(value, sub_sub_title) in project_obj" :key="sub_sub_title">
          <dt class="col-sm-2">{{sub_sub_title}}</dt>
          <dd class="col-sm-10">
            <template v-if="valueIsObject(value)">
              <ProjectObject :project_obj="value" :key="index" />
            </template>
            <template v-if="valueIsArray(value)">
              <ProjectArray :project_arr="value" :key="index" />
            </template>
            <span v-for="(value, index) in value" :key="index">{{value}}</span>
          </dd>
        </fragment>
      </dl>
    </dd>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
export default {
  props: {
    project_obj: Object
  },
  components: {
    Fragment
  },
  data: function() {
    return { project_obj: this.project_obj };
  },
  computed: {},
  methods: {
    valueIsObject: function(value) {
      return typeof value !== "undefined" && typeof value === "object";
    }
  }
};
</script>
