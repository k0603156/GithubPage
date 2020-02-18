<template>
  <fragment>
    <dl class="row">
      <dt class="col-sm-2">{{name}}</dt>
      <dd class="col-sm-10">
        <dl class="row" v-for="(value, sub_title) in body" :key="sub_title">
          <fragment v-if="typeof value !== 'undefined'">
            <dt class="col-sm-12">{{sub_title}}</dt>
            <dd class="col-sm-12">
              <fragment v-if="Array.isArray(value)">
                <a v-href></a>
                <fragment v-for="(sub_value, index) in value" :key="index">
                  <fragment v-if="Array.isArray(sub_value)">
                    <span v-for="(sub_sub_value, index) in sub_value" :key="index">{{sub_sub_value}}</span>
                  </fragment>
                  <fragment v-else-if="typeof sub_value === 'object'">{{sub_value}}</fragment>
                </fragment>
              </fragment>
              <fragment v-else-if="typeof value === 'string'">{{value}}</fragment>
              <fragment v-else-if="typeof value === 'object'">
                <dl class="row">
                  <fragment v-for="(value, sub_sub_title) in value" :key="sub_sub_title">
                    <dt class="col-sm-2">{{sub_sub_title}}</dt>
                    <dd class="col-sm-10">
                      <span v-for="(value, index) in value" :key="index">{{value}}</span>
                    </dd>
                  </fragment>
                </dl>
              </fragment>
            </dd>
          </fragment>
        </dl>
      </dd>
    </dl>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
export default {
  props: {
    project: Object
  },
  components: {
    Fragment
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
  computed: {},
  methods: {
    f: function() {}
  }
};
</script>
