<template>
    <div class="people">
        <div
            v-for="person in people"
            :key="person.name"
            class="card"
        >
            <div class="profile-image">
            <img
                :src="require(`@/assets/${person.image}`)"
                :alt="`Profile picture for ${person.name}`"
            />
            </div>

            <div class="card__details">
                <h2>{{ person.name }}</h2>
                <p>{{ person.title }}</p>

                <a
                    v-for="(url, type) in person.socials"
                    :key="type"
                    :href="url"
                    target="_blank"
                >
                    <font-awesome-icon :icon="socialIcons[type]" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import people from '../data/people.json';

export default {
    data () {
        return {
            people,
            socialIcons: {
                twitter: ['fab', 'twitter'],
                instagram: ['fab', 'instagram'],
                github: ['fab', 'github'],
                linkedin: ['fab', 'linkedin-in'],
                website: ['fas', 'globe'],
            }
        };
    },
};
</script>

<style lang="scss" scoped>
.people {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    gap: cRems(30px);
    justify-content: center;
    margin: cRems(80px) 0 cRems(50px);
    padding: 0 cRems(60px);
    position: relative;
    z-index: 2;

    @include medium {
        flex-wrap: nowrap;
        justify-content: space-evenly;
        margin: cRems(100px) 0 cRems(50px);
    }
}

.card {
    background: white;
    width: 45%;

    @include medium {
        width: 30%;
    }

    &:first-of-type {
        @include medium {
            margin-right: cRems(40px);
        }
    }

    .profile-image {
        margin: auto;

        @include medium {
            width: cRems(163px);
        }

        img {
            border-radius: 10px 0;
            max-width: 100%;
        }
    }

    &__details {
        padding: cRems(30px) 0;
        text-align: center;

        h2 {
            font-size: cRems(24px);
            margin-top: 0;
            margin-bottom: cRems(10px);
        }

        p {
            font-size: cRems(14px);
            margin-bottom: cRems(40px);
        }

        a {
            margin-right: cRems(15px);

            &:last-of-type {
                margin-right: 0;
            }
        }
    }
}
</style>
