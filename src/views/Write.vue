<template lang="html">
<div class="sites" id="subpage">
  <div class="centerm">
  <button @click="writeToFile()">Write to File</button>
  <button @click="convertBlob()">Blob</button>

  </div>

</div>
</template>

<script>
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
    async convertBlob(){
      let blobArr = this.$root.$data.blobs.map(x => x.ZDATA)
      for(let blob of blobArr) {
        //console.log(blob);
        const blb    = new Blob([blob]);
        const reader = new FileReader();

        // Start reading the blob as text.
        reader.readAsText(blb);
        reader.onload = function() {
          console.log(reader.result);
        }
      }
    },
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
