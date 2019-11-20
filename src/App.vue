<template>
  <fragment>
    <Nav />
    <Header />
    <Section sub-title="Profile">
      <Profile slot="body" :profile="profile" />
    </Section>
    <Section sub-title="Project">
      <ProjectCard
        slot="body"
        v-bind:key="project.projectName"
        v-for="project in projects"
        :project="project"
        @open="SET_SHOW_PROJECT_MODAL(true)"
      />
      <ProjectModal
        slot="modal"
        v-show="isShowProjectModal"
        @close="SET_SHOW_PROJECT_MODAL(false)"
      />
    </Section>

    <Disqus />

    <Footer />
  </fragment>
</template>
<script>
import {
  Nav,
  Profile,
  Header,
  Section,
  Footer,
  ProjectCard,
  Disqus,
  ProjectModal
} from "./components";
import { Fragment } from "vue-fragment";
import { mapState, mapMutations } from "vuex";
import ProjectData from "./data/project.json";
import ProfileData from "./data/profile.json";
import SkillData from "./data/skill.json";
import animate from "./mixin/animate";

export default {
  mixins: [animate],
  components: {
    Fragment,
    Nav,
    Profile,
    Header,
    Section,
    Footer,
    ProjectCard,
    Disqus,
    ProjectModal
  },
  computed: {
    ...mapState({ isShowProjectModal: "isShowProjectModal" })
  },
  data: function() {
    return {
      projects: [...ProjectData.project],
      profile: ProfileData.profile,
      skill: SkillData.skillList
    };
  },
  mounted() {},
  methods: { ...mapMutations(["SET_SHOW_PROJECT_MODAL"]) }
};
</script>
<style lang="scss"></style>
