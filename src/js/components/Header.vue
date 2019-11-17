<template>
  <header
    id="header"
    class="px-0 container-fluid header-bg"
    :style="`background-image:url(${HeaderBk})`"
  >
    <div class="gradi h-100"></div>
    <div id="title-wrapper">
      <h1>By doubting we come at the truth</h1>
      <svg
        width="100%"
        viewBox="0 0 1000 100"
        enable-background="new 0 0 1000 100"
      >
        <defs>
          <linearGradient id="grad">
            <stop offset="0%" />
            <stop offset="30%" />
            <stop offset="50%" />
            <stop offset="80%" />
            <stop offset="100%" />
          </linearGradient>
        </defs>
        <polyline
          ref="path"
          width="100%"
          height="100%"
          stroke="url(#grad)"
          :points="defaultPoint"
        />
      </svg>
    </div>
  </header>
</template>
<script>
import HeaderBk from "@/data/image/header_back.jpg";
export default {
  props: {},
  data() {
    return {
      HeaderBk,
      defaultPoint:
        "0,50 505,50 530,50 535,50 540,50 555,50 575,50 580,50 585,50 595,50 600,50 605,50 615,50 620,50 630,50 1000,50"
    };
  },
  mounted() {
    const path = this.$refs["path"];
    this.$anime({
      targets: path,
      points: this.pathArray(),
      easing: "easeInOutBounce",
      duration: 10000,
      loop: true
    });
  },
  computed: {},
  methods: {
    pathArray: function() {
      const offset = 5;
      const valueArray = [];
      for (let x = 5; x < 1001 - offset * (25 - 1); x += offset) {
        valueArray.push({
          value: `0,50
            ${x},50
            ${x + offset * 5},50
            ${x + offset * 6},${this.randomRange(0, 100)}
            ${x + offset * 7},50
            ${x + offset * 10},50
            ${x + offset * 14},50
            ${x + offset * 15},${this.randomRange(0, 100)}
            ${x + offset * 16},50
            ${x + offset * 18},50
            ${x + offset * 19},${this.randomRange(0, 100)}
            ${x + offset * 20},50
            ${x + offset * 22},50
            ${x + offset * 23},50
            ${x + offset * 25},50
            1000,50`
        });
      }
      return valueArray;
    }, // makeValue: function(startPointX, offset, waveLengthArr) {
    //   waveLengthArr.map(waveLength => {
    //     waveLength;
    //   });
    //   let value;
    //   return value;
    // },
    randomRange: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
};
</script>
