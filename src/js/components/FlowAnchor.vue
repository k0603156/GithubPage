<template>
    <a class="nav-link" href="#" @click.prevent="scroll">
        <slot />
        <span v-if="srOnly" class="sr-only">(documentFlow)</span>
    </a>
</template>
<script>
import Easings from "../mixin/easings";
export default {
    props: {
        to: { type: String, required: true },
        srOnly: { type: Boolean, default: false },
        duration: { type: Number, default: 300 },
        animate: { type: Number, default: "linear" }
    },
    data() {
        const navbarHeight = 0;
        return { navbarHeight };
    },
    computed: {
        navbarHeight: function() {
            return document.querySelector("#nav-bar").getBoundingClientRect()
                .height;
        },
        target: function() {
            return document.querySelector(`#${this.to}`);
        }
    },
    methods: {
        callback: function() {},
        scroll: function() {
            const { target, duration, animate, callback } = this;
            this.scrollIt(target, duration, animate, callback);
        },
        scrollIt: function(target, duration, easing, callback) {
            const start = window.pageYOffset;
            const startTime =
                "now" in window.performance
                    ? performance.now()
                    : new Date().getTime();

            const documentHeight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
            const windowHeight =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.getElementsByTagName("body")[0].clientHeight;
            const targetOffset =
                typeof target === "number" ? target : target.offsetTop;
            const targetOffsetToScroll =
                Math.round(
                    documentHeight - targetOffset < windowHeight
                        ? documentHeight - windowHeight
                        : targetOffset
                ) + this.navbarHeight;

            if ("requestAnimationFrame" in window === false) {
                window.scroll(0, targetOffsetToScroll);
                if (callback) {
                    callback();
                }
                return;
            }

            function scroll() {
                const now =
                    "now" in window.performance
                        ? performance.now()
                        : new Date().getTime();
                const time = Math.min(1, (now - startTime) / duration);
                console.log(time);
                const timeFunction = Easings[easing](time);
                window.scroll(
                    0,
                    Math.ceil(
                        timeFunction * (targetOffsetToScroll - start) + start
                    )
                );
                if (window.pageYOffset === targetOffsetToScroll) {
                    if (callback) {
                        callback();
                    }
                    return;
                }

                requestAnimationFrame(scroll);
            }

            scroll();
        }
    }
};
</script>