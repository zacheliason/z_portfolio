import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from '../views/Portfolio.vue';
import About from '../views/About.vue';
import Coding from '../views/WebCode.vue';
import SpotifyStreamgraph from '../views/SpotifyStreamgraph.vue';



Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/coding',
    name: 'Coding',
    component: Coding
  },
  {
    path: '/spotifystreamgraph',
    name: "SpotifyStreamgraph",
    component: SpotifyStreamgraph
  },
  {
    path: '*',
    redirect: '/'
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
