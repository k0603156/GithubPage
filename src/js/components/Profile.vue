<template>
    <dl class="col-md-12 col-sm-8 mg-auto pl-sm-5 pr-0 row">
        <dt class="col-sm-3">이름</dt>
        <dd class="col-sm-9">{{name}}</dd>
        <dt class="col-sm-3">전공</dt>
        <dd class="col-sm-9">{{major}}</dd>
        <dt class="col-sm-3">교육</dt>
        <dd class="col-sm-9">
            <dl class="row">
                <dd class="col-sm-12" v-for="v in edu" :key="v">{{v}}</dd>
            </dl>
        </dd>
        <dt class="col-sm-3">E-mail</dt>
        <dd class="col-sm-9">
            <a :href="`mailto:${email}`">{{email}}</a>
        </dd>
        <dt class="col-sm-3">github</dt>
        <dd class="col-sm-9">
            <a :href="github">{{github}}</a>
        </dd>

        <dt class="col-sm-3">관심사</dt>
        <dd class="col-sm-9">
            <dl class="row">
                <template v-for="thing in into">
                    <dt v-bind:key="thing.name" class="col-sm-3">- {{thing.name}}</dt>
                    <dd v-bind:key="thing.intro" class="col-sm-9">{{thing.intro}}</dd>
                </template>
            </dl>
        </dd>
    </dl>
</template>
<script>
export default {
    props: {
        profile: {
            type: Object,
            required: true
        }
    },
    data() {
        const {
            title,
            name,
            edu,
            avatar,
            email,
            github,
            into,
            major
        } = this.profile;
        return { title, name, edu, avatar, email, github, into, major };
    }
};
</script>