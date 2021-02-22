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
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
