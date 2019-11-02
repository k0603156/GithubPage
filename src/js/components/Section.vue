<template>
    <section class="py-5" :id="`section-${layoutType}`">
        <h2>{{title}}</h2>
        <div class="container-fluid">
            <template v-if="layoutType==='project'">
                <div class="row">
                    <slot name="content"></slot>
                </div>
            </template>
            <template v-if="layoutType==='skill'||layoutType==='disqus'">
                <h2>{{title}}</h2>
                <slot name="content"></slot>
            </template>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        title: {
            type: String
        },
        layoutType: {
            type: String
        }
    },
    data: function() {
        return {};
    },
    computed: {}
};
</script>