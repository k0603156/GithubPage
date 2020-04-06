<template>
  <fragment>
    <section id="section-project" class="py-3 px-5" v-for="(val, key) in pdata" :key="key">
      <h2 class="mb-5 font-weight-bold">{{key}}</h2>
      <div>
        <Parser :propsData="val" />
      </div>
    </section>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import Parser from "./Parser";
import ProjectsData from "@/data/project";
export default {
  components: {
    Fragment,
    Parser
  },
  data: function() {
    return { pdata: ProjectsData };
  },
  computed: {},
  methods: {}
};
</script>
