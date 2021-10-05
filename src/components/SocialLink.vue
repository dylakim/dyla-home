<template>
        <a
            :href="url"
            target="_blank"
            :title="label"
            class="social-icon"
        >
            <font-awesome-icon :icon="socialIcons[type]" />
        </a>
</template>

<script>
    export default {
        props: {
            name: {
                required: true,
                type: String,
            },
            type: {
                required: true,
                type: String,
            },
            url: {
                required: true,
                type: String,
            },
        },

        data () {
            return {
                socialIcons: {
                    twitter: ['fab', 'twitter'],
                    instagram: ['fab', 'instagram'],
                    github: ['fab', 'github'],
                    linkedin: ['fab', 'linkedin-in'],
                    website: ['fas', 'globe'],
                },
            };
        },

        computed: {
            label () {
                switch (this.type) {
                    case "twitter":
                        return `Follow ${this.name} on Twitter`;
                    case "instagram":
                        return `Follow ${this.name} on Instagram`;
                    case "github":
                        return `Follow ${this.name} on GitHub`;
                    case "linkedin":
                        return `Connect with ${this.name} on LinkedIn`;
                    case "website":
                        return `${this.name}'s Website`;
                    default:
                        return '';
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
.social-icon {
    font-size: cRems(18px);
    line-height: 1;
    margin-right: cRems(5px);
    padding: cRems(7px);

    &:last-of-type {
        margin-right: 0;
    }

    &:focus,
    &:hover {
        background: #ececec;
        outline: none;
        transition: all ease-in-out .3s;
    }
}
</style>