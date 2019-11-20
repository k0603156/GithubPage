<template>
  <Modal>
    <div slot="header">
      <h2>
        {{ data.projectName }}
        <a href @click.prevent="$emit('close')" class="modal-default-button"
          >&times;</a
        >
      </h2>
      <h3>{{ data.projectSubtitle }}</h3>
    </div>
    <div slot="body">
      <div v-if="data.src" class="imgWrapper">
        <img
          :src="require(`../data/image/${data.src}`)"
          class="card-img"
          :alt="data.alt"
        />
      </div>
    </div>
    <div slot="footer">
      <dt class="col-md-4">Stack</dt>
      <dd class="col-md-8">
        <dl class="row">
          <dt class="col-md-4">Frontend</dt>
          <dd class="col-md-8">{{ data.stack.frontend }}</dd>
          <dt class="col-md-4">Backend</dt>
          <dd class="col-md-8">{{ data.stack.backend }}</dd>
        </dl>
      </dd>
      <template v-if="hasGithub">
        <dt class="col-md-4">Github</dt>
        <dd class="col-md-8">
          <dl class="row">
            <template v-if="hasGithubFrontOrBack">
              <dt class="col-md-4">Frontend</dt>
              <dd class="col-md-8">{{ data.github.frontend }}</dd>

              <dt class="col-md-4">Backend</dt>
              <dd class="col-md-8">{{ data.github.backend }}</dd>
            </template>
            <template v-else-if="hasGithubUrlOnly">
              <dt class="col-md-4">url</dt>
              <dd class="col-md-8">{{ data.github.url }}</dd>
            </template>
          </dl>
        </dd>
      </template>
    </div>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";
import { mapState } from "vuex";
export default {
  components: {
    Modal
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({ data: "projectModalData" }),
    hasGithub: function() {
      const { frontend, backend, url } = this.data.github;
      return frontend || backend || url;
    },
    hasGithubFrontOrBack: function() {
      const { frontend, backend } = this.data.github;
      return frontend || backend;
    },
    hasGithubUrlOnly: function() {
      const { url } = this.data.github;
      return url;
    }
  },
  mounted() {},
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
    }
  }
};
</script>
