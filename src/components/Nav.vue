<template>
  <nav id="nav-bar" class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 384.97 384.97"
            style="enable-background:new 0 0 384.97 384.97;"
          >
            <g id="Menu_1_">
              <path
                d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
			c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"
              />
              <path
                d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
			S379.58,180.455,372.939,180.455z"
              />
              <path
                d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
			c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"
              />
            </g>
          </svg>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <FlowAnchor to="header" srOnly="true">Home</FlowAnchor>
          </li>
          <li class="nav-item">
            <FlowAnchor to="section-project">Projcet</FlowAnchor>
          </li>
          <li class="nav-item">
            <FlowAnchor to="disqus_thread">Disqus</FlowAnchor>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import FlowAnchor from "./FlowAnchor.vue";
export default {
  components: { FlowAnchor },
  data() {
    return { TitleImg };
  }
};
</script>
