<template>
    <header
        id="header"
        class="pt-2 px-0 container-fluid vh-100-withnav header-bg"
        :style="`background-image:url(${HeaderBk})`"
    >
        <div class="gradi h-100"></div>
    </header>
</template>
<script>
import HeaderBk from "@/data/image/header-back.jpg";
export default {
    props: {},
    data() {
        return { HeaderBk };
    },
    mounted() {}
};
</script>


