<template>
    <div class="skillset">
        <p v-for="(val, key) in skill" :key="key">
            <span class="division">{{key}}</span>
            <a
                class="skillLlink"
                v-for="v in val"
                :key="v.name"
                :href="v.url==''? null:v.url"
                target="_blank"
            >
                <span :class="'badge badge-pill badge-'+v.type">{{v.name}}</span>
            </a> ...
        </p>
    </div>
</template>
<script>
export default {
    props: {
        skill: {
            type: Object,
            required: true
        }
    }
};
</script>