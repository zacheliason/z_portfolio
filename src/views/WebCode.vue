<template lang="html">
<div class="sites">
  <ul>
    <li class="link"><a target="_blank" href="http://windows.zacheliason.com/">Windows</a></li>
    <li class="link"><a target="_blank" href="http://species.zacheliason.com/">Species API Search</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "WebCode",
  components: {

  },
  computed: {}
}
</script>

<style lang="css" scoped>
.link a {
  font-size: 2.5em;
  display: block;
  width: 100vw;
  padding: 0;
  z-index: 100;
  color: blue !important;

}
.link a:hover {
  font-size: 4em;
  color: red !important;

}
.sites {
  display: flex;
  width: 50vw;
  height: 100vh;
  position: fixed;
  margin: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  font-weight: bolder;
  }
  ul {
    text-align: left;
    width: 50vw;
  }
</style>
