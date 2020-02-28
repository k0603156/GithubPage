<template>
  <fragment v-if="valueIsObject(propsData)">
    <fragment v-for="(val, key) in propsData" :key="key">
      <dl class="row font-weight-bold" style="font-size:1rem" v-if="val==key">{{val}}</dl>
      <dl class="row" v-else>
        <dt class="col-sm-2">{{key}}</dt>
        <dd class="col-sm-10">
          <Parser :propsData="val" />
        </dd>
      </dl>
    </fragment>
  </fragment>
  <fragment v-else-if="valueIsArray(propsData)">
    <Parser v-for="(val, index) in propsData" :key="index" :propsData="val" />
  </fragment>
  <fragment v-else-if="valueIsString(propsData)">
    <span class="mr-1">{{propsData}}</span>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";

export default {
  name: "Parser",
  props: {
    propsData: Object
  },
  components: {
    Fragment
  },
  data: function() {
    return {};
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
