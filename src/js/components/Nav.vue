<template>
    <nav id="nav-bar" class="navbar navbar-expand-lg bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img :src="TitleImg" height="35px" />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <FlowAnchor to="header" srOnly="true">Home</FlowAnchor>
                    </li>
                    <li class="nav-item">
                        <FlowAnchor to="section-skill">Skill</FlowAnchor>
                    </li>
                    <li class="nav-item">
                        <FlowAnchor to="section-project">Projcet</FlowAnchor>
                    </li>
                    <li class="nav-item">
                        <FlowAnchor to="section-disqus">Disqus</FlowAnchor>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import TitleImg from "@/data/image/title.png";
import FlowAnchor from "./FlowAnchor.vue";
export default {
    components: { FlowAnchor },
    data() {
        return { TitleImg };
    }
};
</script>