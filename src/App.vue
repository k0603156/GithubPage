<template>
  <fragment>
    <Nav />
    <Header />
    <Project />
    <Disqus />
    <Footer />
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import { mapState, mapMutations } from "vuex";
import { Nav, Project, Header, Footer, Disqus } from "./components";
import animate from "./mixin/animate";
import ProjectData from "./data/project.json";
import ProfileData from "./data/profile.json";

export default {
  mixins: [animate],
  components: {
    Fragment,
    Project,
    Nav,
    Header,
    Footer,
    Disqus
  },
  computed: {
    ...mapState({ isShowProjectModal: "isShowProjectModal" })
  },
  data: function() {
    return {
      projects: [...ProjectData.project],
      profile: ProfileData.profile
    };
  },
  mounted() {
    window.addEventListener("touchmove", handleTouchMove, {
      passive: false
    });
  },
  methods: {
    ...mapMutations(["SET_SHOW_PROJECT_MODAL"])
  }
};
</script>
