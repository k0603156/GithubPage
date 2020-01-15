<template>
  <header id="header" class="px-0 container-fluid header-bg">
    <div id="gradi-header"></div>
    <div id="title-wrapper">
      <h1 :data-text="heading">{{ heading }}</h1>
      <svg width="100%" viewBox="0 0 1000 100" enable-background="new 0 0 1000 100">
        <defs>
          <filter id="f" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>

          <linearGradient id="grad">
            <stop offset="0%" />
            <stop offset="30%" />
            <stop offset="50%" />
            <stop offset="80%" />
            <stop offset="100%" />
          </linearGradient>
        </defs>
        <polyline
          filter="url(#f)"
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
// import HeaderBk from "@/data/image/header_back.jpg";
export default {
  props: {},
  data() {
    return {
      // HeaderBk,
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
  computed: {
    heading() {
      const string = `By doubting we come at the truth`;
      return string;
    }
  },
  methods: {
    pathArray: function() {
      const offset = 5;
      const valueArray = [];
      for (let x = 5; x < 1001 - offset * (25 - 1); x += offset) {
        valueArray.push({
          value: `0,50
            ${x},50
            ${x + offset * 5},50
            ${x + offset * 11},50
            ${x + offset * 12},50
            ${x + offset * 13.5},50
            ${x + offset * 14},${this.randomRange(40, 50)}
            ${x + offset * 15},${this.randomRange(50, 70)}
            ${x + offset * 16},${this.randomRange(10, 50)}
            ${x + offset * 17},${this.randomRange(50, 90)}
            ${x + offset * 18},${this.randomRange(30, 50)}
            ${x + offset * 19},${this.randomRange(50, 60)}
            ${x + offset * 19.5},50
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
