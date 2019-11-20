import anime from 'animejs';
export default {
  data: function () {
    return {};
  },
  methods: {
    isElBottomZero: function (elements) {
      return elements.getBoundingClientRect().top < window.innerHeight;
    },
    scrollEvent: function (callback) {
      window.addEventListener("scroll", function (e) {
        // const scrollPos = window.scrollY;
        // const winHeight = window.innerHeight;
        // const docHeight = document.documentElement.scrollHeight;
        // const scrollYperc = (100 * scrollPos) / (docHeight - winHeight);
        callback();
      });
    },
    transY: function (elements, boolean) {
      anime({
        targets: elements,
        translateY: boolean ? 0 : 200
      })
    }
  }
}