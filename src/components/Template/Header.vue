<template>
  <header id="header" class="px-0 container-fluid">
    <div class="wrapper row">
      <div class="boxImg" />
      <div class="wrapper column">
        <p type="name">{{ profile.eng_name }}</p>
        <p type="email">{{ profile.email }}</p>
        <p type="intro">{{ profile.intro }}</p>
      </div>
    </div>
    <div class="bgImg" />
  </header>
</template>
<script>
import ProfileData from "@/data/profile";
export default {
  props: {},
  data() {
    return {
      profile: ProfileData.profile
    };
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>
