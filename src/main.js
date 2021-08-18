import Vue from "vue";
import App from "./App.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTwitter, faInstagram, faGithub, faLinkedinIn, faGlobe, faCamera);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
