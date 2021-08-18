<template>
  <div id="app">
    <div class="hero">
      <h1>Welcome!</h1>
      <div class="image-details">
        <font-awesome-icon :icon="['fas', 'camera']" />
        <p>{{ imageDetails }}</p>
      </div>
    </div>
    <div class="people">
      <DetailsCard
        v-for="person in people"
        :key="person.name"
        v-bind="person" />
    </div>

    <Cocktails />
    <Footer />
  </div>
</template>

<script>
import people from './data/people.json';
import Cocktails from "./components/Cocktails.vue";
import DetailsCard from "./components/DetailsCard.vue";
import Footer from "./components/TheFooter.vue";

export default {
  name: "App",

  components: {
    Cocktails,
    DetailsCard,
    Footer,
  },

  data () {
    return {
      imageDetails: 'Horsetooth Mountain, Colorado',
      people,
    };
  },
};
</script>

<style lang="scss">
.hero {
  background: url('./assets/hero.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  height: 45vh;

  @include medium {
    height: 55vh;
  }

  h1 {
    color: white;
    text-align: center;
    padding-top: cRems(80px);
  }
}

.image-details {
  align-items: center;
  color: white;
  display: flex;
  justify-content: flex-start;
  left: cRems(20px);
  position: absolute;
  top: cRems(15px);

  @include medium {
    left: cRems(45px);
  }

  svg {
    margin-right: cRems(10px);
  }

  span {
    @include medium {
      font-size: cRems(14px);
    }
  }
}

.people {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: cRems(-70px);
  margin-bottom: cRems(100px);
  padding: 0 cRems(60px);
  position: relative;
  z-index: 2;

  @include medium {
    justify-content: center;
  }
}
</style>
