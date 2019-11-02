<template>
    <fragment>
        <Nav />
        <Header :profile="profile" />
        <Section layoutType="skill">
            <template slot="content">
                <SkillSet :skill="skill" />
            </template>
        </Section>
        <Section title="Project" layoutType="project">
            <template slot="content">
                <ProjectCard
                    v-bind:key="project.projectName"
                    v-for="project in projects"
                    :project="project"
                />
            </template>
        </Section>
        <Section layoutType="disqus">
            <template slot="content">
                <Disqus />
            </template>
        </Section>

        <Footer />
    </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import SkillSet from "./components/SkillSet";
import Disqus from "./components/Disqus";
import ProjectData from "../data/project.json";
import ProfileData from "../data/profile.json";
import SkillData from "../data/skill.json";
import animate from "./mixin/animate";

export default {
    mixins: [animate],
    components: {
        Fragment,
        Nav,
        Header,
        Section,
        Footer,
        ProjectCard,
        SkillSet,
        Disqus
    },
    data: function() {
        return {
            projects: [...ProjectData.project],
            profile: ProfileData.profile,
            skill: SkillData.skillList
        };
    },
    mounted() {}
};
</script>