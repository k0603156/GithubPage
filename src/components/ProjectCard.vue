<template>
  <article>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="243"
      height="300"
      viewBox="0 0 242.4871130596428 300"
      style="filter: drop-shadow(rgba(0, 0, 0, .3) 3px 3px 3px);"
    >
      <defs>
        <filter id="f2" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>

      <path
        filter="url(#f2)"
        d="M121.2435565298214 5L242.4871130596428 75L242.4871130596428 215L121.2435565298214 285L0 210L0 75Z"
      />
    </svg>
    <figure>
      <h2>{{ projectName }}</h2>
      <p>{{ projectSubtitle }}</p>
      <a class="btnOpenModal" href @click.prevent="openModal">view</a>
      <ul>
        <li v-for="(item, key) in githubUpdated" :key="key">{{key}}:{{item}}</li>
      </ul>
      {{d}}
    </figure>
  </article>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    const { projectName, projectSubtitle, github } = this.project;
    const githubUpdated = {
      frontend: null,
      backend: null,
      url: null
    };
    return {
      projectName,
      projectSubtitle,
      github,
      githubUpdated
    };
  },
  beforeMount() {
    this.github.frontend &&
      this.getDate(this.github.frontend).then(
        result => (this.githubUpdated.frontend = result)
      );
    this.github.backend &&
      this.getDate(this.github.backend).then(
        result => (this.githubUpdated.backend = result)
      );
    this.github.url &&
      this.getDate(this.github.url).then(
        result => (this.githubUpdated.url = result)
      );
  },
  computed: {
    d: function() {
      // this.getDate(this.github.url).then(s => {
      //   return s;
      // });
    }
  },
  methods: {
    ...mapMutations(["SET_PROJECT_MODAL_DATA"]),
    openModal: function() {
      this.$emit("open");
      this.SET_PROJECT_MODAL_DATA(this.project);
    },
    parseRepoName: function(url) {
      return url.substr(url.lastIndexOf("/") + 1);
    },
    getRepoData: function(repoName) {
      return this.axios.get(
        `https://api.github.com/repos/k0603156/${repoName}/commits`
      );
    },
    getPassedTime: function(time) {
      const d = (new Date() - new Date(time)) / (3600000 * 24),
        h = (d - parseInt(d)) * 24,
        m = (h - parseInt(h)) * 60;
      return { d, h, m };
    },
    getDate: async function(url) {
      const repoName = this.parseRepoName(url);
      const { data } = await this.getRepoData(repoName);
      const { d, h, m } = this.getPassedTime(data[0].commit.author.date);
      return `${Math.round(d)}일 ${Math.round(h)}시간 ${Math.round(m)}분 전`;
    }
  }
};
</script>
