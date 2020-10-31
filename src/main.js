import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import dataset from './dataset.js'

Vue.config.productionTip = false;

let data = {
  products: dataset,
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
