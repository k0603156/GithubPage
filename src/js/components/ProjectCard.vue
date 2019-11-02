<template>
    <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4 img-wrapper" v-if="src">
                    <img :src="require(`../../data/image/${src}`)" class="card-img" :alt="alt" />
                </div>
                <div :class="[src?'col-md-8': 'col-md-12']">
                    <div class="card-body">
                        <h3 class="card-title">{{projectName}}</h3>
                        <p class="card-text">{{projectSubtitle}}</p>
                        <dl class="row">
                            <dt class="col-md-4">Stack</dt>
                            <dd class="col-md-8">
                                <dl class="row">
                                    <dt class="col-md-4">Frontend</dt>
                                    <dd class="col-md-8">{{stack.frontend}}</dd>
                                    <dt class="col-md-4">Backend</dt>
                                    <dd class="col-md-8">{{stack.backend}}</dd>
                                </dl>
                            </dd>

                            <template v-if="hasGithub()">
                                <dt class="col-md-4">Github</dt>
                                <dd class="col-md-8">
                                    <dl class="row">
                                        <template v-if="hasGithubFrontOrBack()">
                                            <dt class="col-md-4">Frontend</dt>
                                            <dd class="col-md-8">{{github.frontend}}</dd>
                                            <p class="col-md-12 card-text text-right">
                                                <small
                                                    class="text-muted"
                                                >Last updated {{githubUpdated.frontend}}</small>
                                            </p>
                                            <dt class="col-md-4">Backend</dt>
                                            <dd class="col-md-8">{{github.backend}}</dd>
                                            <p class="col-md-12 card-text text-right">
                                                <small
                                                    class="text-muted"
                                                >Last updated {{githubUpdated.backend}}</small>
                                            </p>
                                        </template>
                                        <template v-else-if="hasGithubUrlOnly()">
                                            <dt class="col-md-4">url</dt>
                                            <dd class="col-md-8">{{github.url}}</dd>
                                            <p class="col-md-12 card-text text-right">
                                                <small
                                                    class="text-muted"
                                                >Last updated {{githubUpdated.url}}</small>
                                            </p>
                                        </template>
                                    </dl>
                                </dd>
                            </template>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
        this.github.frontend &&
            this.getDate(this.github.frontend).then(
                r => (this.githubUpdated.frontend = r)
            );
        this.github.backend &&
            this.getDate(this.github.backend).then(
                r => (this.githubUpdated.backend = r)
            );
        this.github.url &&
            this.getDate(this.github.url).then(
                r => (this.githubUpdated.url = r)
            );
    },
    methods: {
        getDate: function(url) {
            const repoName = url.substr(url.lastIndexOf("/") + 1);
            return this.axios
                .get(
                    `https://api.github.com/repos/k0603156/${repoName}/commits`
                )
                .then(response => {
                    const today = new Date();
                    const before = new Date(
                        response.data[0].commit.author.date
                    );
                    const d = (today - before) / (3600000 * 24);
                    const h = (d - parseInt(d)) * 24;
                    const m = (h - parseInt(h)) * 60;

                    return `${Math.round(d)}일 ${Math.round(
                        h
                    )}시간 ${Math.round(m)}분 전`;
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