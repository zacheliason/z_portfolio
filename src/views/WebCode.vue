<template lang="html">
<div class="sites" id="subpage">
  <div class="fill">
    <div class="half">

    </div>
  <p>While I've worked on many coding projects, many of them are difficult to display in a way that I am happy with. As such, the best examples of my programming portfolio remain this website and this slowly growing list of projects:</p>
  <ul>
    <li class="link"><router-link class="changed" to="/spotifystreamgraph">Spotify Streamgraph</router-link></li>
  </ul>
  </div>

</div>
</template>

<script>
export default {
  name: "Coding",
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
  width: 50vw;
  height: 100vh;
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
  @media screen and (max-width: 620px) {
    .sites {
      width: 100vw;
      justify-content: unset;
      font-size: 1em;
    }
  }
</style>
