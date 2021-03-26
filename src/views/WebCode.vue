<template lang="html">
<div class="sites" id="subpage">
  <div class="fill">
    <div class="half">

    </div>
  <p>While I've worked on many coding projects, most of them are difficult to display in a way that I am happy with. As such, the best examples of my programming portfolio remain this website and this slowly growing list of projects:</p>
  <ul>
    <li @mouseover="writeToFile" class="link"><router-link class="changed" to="/spotifystreamgraph">Spotify Streamgraph</router-link></li>
  </ul>
</div>
</div>
</template>

<script>
export default {
  name: "Coding",
  methods: {
    observerClean (obj) {
      return Object.keys(obj).reduce(
        (res, e) => Object.assign(res, { [e]: obj[e] }),
        {}
      )
    },
    writeToFile() {
      console.log("HEY");
      const finalData = this.observerClean(this.$root.$data.dayJSON);
      console.log(finalData);
    }
  },
  components: {

  },
  computed: {}
}
</script>

<style lang="css" scoped>
.half {
  position: absolute;
  top: -60vh;
  height: 60vh;
  width: 50%;
  border-width: 0 5px 0 0 ;
  border-color: #5A00FF /*blue*/;
  border-style: dotted;
}
.fill {
  transform: translateY(-200%);
  animation: 1s ease .5s 1 slideInFromTop forwards;
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
.link a {
  display: block;
  padding: 0;
  z-index: 100;
  color: #5A00FF /*blue*/ !important;
}
.link a:hover {
  color: #24CFFA /*teal*/ !important;
}
.sites {
  display: flex;
  width: 50%;
  height: 100%;
  margin: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  font-weight: bolder;
  }
  ul {
    width: 100%;
  padding: 0;
  }
  @media screen and (max-width: 900px) {
.sites {
  height: 115%;
}
}
  @media screen and (max-width: 620px) {
    .half {
      top:-60vh;
      display: relative;
    }
    .sites {
      height: 100%;
      width: 100vw;
      font-size: 1em;
      padding: 50px 6%;
      top: unset;
      bottom: unset
    }
  }
</style>
