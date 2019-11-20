<template>
  <section class="py-3" :id="sectionId">
    <h2 v-if="hasHeader">{{ subTitle }}</h2>
    <div :class="'container-fluid ' + className">
      <slot name="body" />

      <slot name="modal" />
    </div>
  </section>
</template>
<script>
export default {
  props: {
    subTitle: {
      type: String.isRequired
    }
  },
  data: function() {
    return {};
  },
  computed: {
    sectionId() {
      return `section-${this.subTitle.toLowerCase()}`;
    },
    className() {
      if (this.subTitle == "Project") {
        return "cRow";
      }
      return "";
    },
    hasHeader() {
      if (this.subTitle == "Profile") {
        return false;
      }
      return true;
    }
  },
  methods: {}
};
</script>
