<template>
  <article>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="241"
      height="278"
      viewbox="0 0 240.75506225207394 278"
      style="filter: drop-shadow(rgba(255, 255, 255, 0.5) 0px 0px 10px);"
    >
      <path
        id="ww"
        fill="transparent"
        d="M120.37753112603697 0L240.75506225207394 69.5L240.75506225207394 208.5L120.37753112603697 278L0 208.5L0 69.5Z"
      ></path>
    </svg>
    <figure>
      <h2>{{ projectName }}</h2>
      <p>{{ projectSubtitle }}</p>
      <a href="">view</a>
    </figure>
  </article>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    const {
      projectName,
      projectSubtitle,
      src,
      alt,
      stack,
      github
    } = this.project;
    const githubUpdated = {
      frontend: null,
      backend: null,
      url: null
    };
    return {
      projectName,
      projectSubtitle,
      src,
      alt,
      stack,
      github,
      githubUpdated
    };
  },
  beforeMount() {
    // this.github.frontend &&
    //   this.getDate(this.github.frontend).then(
    //     r => (this.githubUpdated.frontend = r)
    //   );
    // this.github.backend &&
    //   this.getDate(this.github.backend).then(
    //     r => (this.githubUpdated.backend = r)
    //   );
    // this.github.url &&
    //   this.getDate(this.github.url).then(r => (this.githubUpdated.url = r));
  },
  methods: {
    getDate: function(url) {
      const repoName = url.substr(url.lastIndexOf("/") + 1);
      return this.axios
        .get(`https://api.github.com/repos/k0603156/${repoName}/commits`)
        .then(response => {
          const today = new Date();
          const before = new Date(response.data[0].commit.author.date);
          const d = (today - before) / (3600000 * 24);
          const h = (d - parseInt(d)) * 24;
          const m = (h - parseInt(h)) * 60;

          return `${Math.round(d)}일 ${Math.round(h)}시간 ${Math.round(
            m
          )}분 전`;
        });
    },
    hasGithub: function() {
      const { frontend, backend, url } = this.github;
      return frontend || backend || url;
    },
    hasGithubFrontOrBack: function() {
      const { frontend, backend } = this.github;
      return frontend || backend;
    },
    hasGithubUrlOnly: function() {
      const { url } = this.github;
      return url;
    }
  }
};
</script>
