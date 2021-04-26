import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import dataset from './dataset.js'
import dayJSON from '../currentday.json'
import blobs from './blob.json'

Vue.config.productionTip = false;
delete dayJSON.__ob__
delete blobs.__ob__
let data = {
  blobs: blobs,
  dayJSON: dayJSON,
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
  timerOn: false,
  wideScreen: (window.innerWidth > 800) ? true : false,
  windowWidth: window.innerWidth,
}

new Vue({
  router,
  data,
  methods: {
    setTimer() {
      document.getElementById("subpage").style.animation = "fadeIn .3s ease forwards";
      this.$root.$data.timerOn = true;
      setTimeout(() => this.$root.$data.timerOn = false, 700);
    },
    fadeSubPage() {
      if ((this.$root.$data.timerOn == false)) {
        document.getElementById("subpage").style.animation = "fadeOut .5s ease forwards";
      }
    },
    fadeInSubPage() {
      if ((!this.$root.$data.isMobile)) {
        document.getElementById("subpage").style.animation = "fadeIn .3s ease forwards";
      }
    },
  },
  render: h => h(App)
}).$mount("#app");
