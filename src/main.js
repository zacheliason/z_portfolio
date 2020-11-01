import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import dataset from './dataset.js'

Vue.config.productionTip = false;

let data = {
  items: dataset,
  current: {
    id: '2',
    title: 'Bambina Poster',
    img: 'Jacob+Elise.jpg',
    alt: ''
  },
  showModal: true,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
