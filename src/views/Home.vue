<template>
<div id="subpage" class="homelist">
  <div class="homebox">
    <!--
    <div class="homebox">
      <router-link to="/portfolio"><span :key="item.id" @click="goTo(item)" v-for="item in items">{{item.name}}<span class="dot">&#xb7;</span></span></router-link>
    </div>
  -->
    <h1 class="disappear">Hello! This is where I host my design and coding portfolios. Feel free to take a look around!
    </h1>
  </div>

</div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {}
  },
  methods: {
    goTo(item) {
      this.$root.$data.selectCategory = item.category[0];
      document.getElementById("nav").style.animation = "fadeOut .5s ease forwards";
      setTimeout(() => document.getElementById("nav").style.display = "none", 500);
      this.$root.$data.current.id = item.id;
      this.$root.$data.current.name = item.name;
      this.$root.$data.current.description = item.description;
      this.$root.$data.current.category = item.category;
      this.$root.$data.current.img = item.image;
      this.$root.$data.current.date = item.date;
      this.$root.$data.showModal = true;
    },
    sortItems() {
      return this.$root.$data.items.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    }
  },
  computed: {
    items() {
      return this.sortItems();
    }
  }
}
</script>

<style lang="css" scoped>
h1 {
  text-align: center;
  display: inline;
  font-size: 2em;
  text-align: center;
  opacity: 1;
  transition: 1s;
}

a {
  font-size: 2em;
text-align: center;
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: bold;
  text-align: center;
  color: #5A00FF /*blue*/;
}
a:hover {
color: #24CFFA
      /*teal*/
       !important;
}
span,a{
  /*color: black;
  font-family: mrs-eaves, serif;
  font-size: 1.3em;
  font-weight: normal;*/
  transition: .3s;
  cursor: pointer;
}
span {
  opacity: .3;
}
span:hover {
  opacity: 1 !important;
  transition: .3s;
}
.dot {
  color: #5A00FF /*blue*/;
  padding: 0 5px;
  font-size: 1em;
  opacity: 1;

}
.homebox {
  width: 50%;
  line-height: 1;
}
.homelist {
  color: #5A00FF /*blue*/;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top:0;
  left: 0;
  z-index: -1;
}
@media screen and (max-width: 620px) {
  span, a {
    font-size: 2em;
  }
  .homebox {
    width: 100%;
    padding: 0 10%;
  }
}
</style>
