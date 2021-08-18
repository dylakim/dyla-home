<template>
  <div class="card">
    <div class="profile-image">
      <img :src="require(`@/assets/${image}`)" alt="" />
    </div>

    <div class="card__details">
      <h2>{{ name }}</h2>
      <p>{{ title }}</p>

      <a v-if="social.twitter" :href="social.twitter">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>

      <a v-if="social.instagram" :href="social.instagram">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>

      <a v-if="social.github" :href="social.github">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>

      <a v-if="social.linkedin" :href="social.linkedin">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
      </a>

      <a v-if="social.website" :href="social.website">
        <font-awesome-icon :icon="['fas', 'globe']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    social: {
      default: () => {},
      required: false,
      type: Object,
    }
  },

  computed: {
    imagePath () {
      return '/assets/kim.png';
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  align-items: center;
  background: white;
  border: 1px solid #333;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.25);
  display: flex;
  justify-content: flex-start;
  width: cRems(240px);

  @include small {
    flex-direction: column;
  }

  @include medium {
    height: cRems(178px);
    width: cRems(440px);
  }

  &:first-of-type {
    @include medium {
      margin-right: cRems(40px);
    }
  }

  .profile-image {
    @include medium {
      width: cRems(163px);
    }

    img {
      max-width: 100%;
    }
  }

  &__details {
    margin-left: cRems(20px);
    padding: cRems(30px) 0;
    text-align: center;

    @include medium {
      text-align: left;
    }

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
      color: #333;
      margin-right: cRems(15px);
    }
  }
}
</style>
