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

                <SocialLink
                    v-for="(url, type) in person.socials"
                    :key="type"
                    :url="url"
                    :type="type"
                    :name="person.name"
                />
            </div>
        </div>
    </div>
</template>

<script>
import people from '../data/people.json';
import SocialLink from './SocialLink.vue';

export default {
    components: {
        SocialLink,
    },

    data () {
        return {
            people,
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
        margin: cRems(100px) auto cRems(50px);
        max-width: 1440px;
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
            width: cRems(240px);
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
            font-size: cRems(16px);
            margin-bottom: cRems(30px);
        }
    }
}
</style>
