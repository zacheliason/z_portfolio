import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import dataset from './dataset.js'

Vue.config.productionTip = false;

let data = {
  importPending: true,
  importedJSON: [],
  artistList: [],
  csv: '',
  topArtists: [],
  topArtistsKeys: {},
  weekMax: 0,
  newWidth: 0,
  items: dataset,
  current: {
    id: '',
    name: '',
    category: '',
    img: [],
    orientation: [],
    description: '',
    date: '',
  },
  showModal: false,
  selectCategory: '',
  timerOn: false
}

new Vue({
  router,
  data,
  methods: {
    setTimer() {
      document.getElementById("subpage").style.animation = "fadeIn .3s ease forwards";
      this.$root.$data.timerOn = true;
      console.log("timer on");
      setTimeout(() => this.$root.$data.timerOn = false, 1000);
      setTimeout(() => console.log("timer off"), 1000)
    },
    fadeSubPage() {
      if (this.$root.$data.timerOn == false) {
        console.log("blip");
        document.getElementById("subpage").style.animation = "fadeOut .5s ease forwards";
      }
    },
    fadeInSubPage() {
        document.getElementById("subpage").style.animation = "fadeIn .3s ease forwards";

    }
  },
  render: h => h(App)
}).$mount("#app");
