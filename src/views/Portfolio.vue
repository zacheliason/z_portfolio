<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <!--<li class="pure-menu-item"><a @click="select('United States')" href="#" class="pure-menu-link">United States</a></li>
      <li class="pure-menu-item"><a @click="select('Canada')" href="#" class="pure-menu-link">Canada</a></li>
      <li class="pure-menu-item"><a @click="select('Mexico')" href="#" class="pure-menu-link">Mexico</a></li>
      <li class="pure-menu-item"><a @click="select('Brazil')" href="#" class="pure-menu-link">Brazil</a></li>-->
    </ul>
  </div>
  <imageViewer :items="items" />
</div>
</template>


<script>
import imageViewer from "../components/imageViewer.vue";
export default {
  name: "Portfolio",
  components: {
    imageViewer,
  },
  computed: {
    items() {
      return this.$root.$data.items;
    },
  }
}
</script>

<style media="screen">

</style>
