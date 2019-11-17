<template>
  <section class="py-3" :id="`section-${subTitle}`">
    <h2>{{ subTitle }}</h2>
    <div class="container-fluid">
      <div class="cRow">
        <slot />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    subTitle: {
      type: String
    }
  },
  data: function() {
    return {};
  },
  computed: {}
};
</script>
