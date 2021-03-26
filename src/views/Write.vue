<template lang="html">
<div class="sites" id="subpage">
  <div class="centerm">
  <button @click="writeToFile()">Write to File</button>
  </div>

</div>
</template>

<script>
//import * as fs from 'fs';
import axios from "axios";
export default {
  name: "Write",
  components: {

  },
  data() {
    return {
      spotify: {}
    }
  },
  methods: {
    observerClean (obj) {
      return Object.keys(obj).reduce(
        (res, e) => Object.assign(res, { [e]: obj[e] }),
        {}
      )
    },
    writeToFile() {
      const finalData = this.observerClean(this.$root.$data.dayJSON);
      console.log(finalData);
    }
  },
  computed: {}
}
</script>
<style media="screen">
  .centerm {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
