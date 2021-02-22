<template>
<div class="wrapper">
  <div class="items" id="items" ref="items">
    <div class="item" v-for="item in items" :key="item.id" @click="modalSwitchOn(item)" v-bind:style="'background: url(/images/' + item.image[0] + ') no-repeat center top;'">
      <div class="onHover">{{item.name}}</div>
    </div>
    <modalViewer :current="current" />
  </div>
</div>
</template>

<script>
import modalViewer from "../components/modalViewer.vue";
export default {
  name: "imageViewer",
  components: {
    modalViewer,
  },
  props: {
    items: Array,
  },
  data() {
    return {
    }
  },
  computed: {
    current() {
      return this.$root.$data.current;
    },
    showModal() {
      return this.$root.$data.showModal;
    },
  },
  methods: {
    modalSwitchOn(item) {
      this.$root.$data.current.id = item.id;
      this.$root.$data.current.name = item.name;
      this.$root.$data.current.description = item.description;
      this.$root.$data.current.category = item.category;
      this.$root.$data.current.img = item.image;
      this.$root.$data.current.date = item.date;
      this.$root.$data.showModal = true;
    },
  }
}
</script>

<style lang="css" scoped>
.art,.design,.photos,.all {
  padding: .5em 1em;
  display: inline-block;
  background-color: white;
}
.item:hover .onHover{
  opacity: 1.0;
}
.onHover {
  opacity: 0;
  position: relative;
  z-index: 100000;
  bottom: 2em;
  z-index: 100;
  left: 1.5em;
  color: #FC440F;
  text-align: left;
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: bolder;
}
.visually-hidden {
    width: 0;
    height: 0;
}

.wrapper {
  height: 100%;
}

.image img {
  bottom: 100%;
}

.flexdiv {
  flex-direction: column;
  display: flex;
  height: 100%;
  align-items: stretch;
}

img {
  height: 100%;
  overflow: hidden;
}

.items {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1em;
  -moz-column-gap: 1em;
  -webkit-column-gap: 1em;
  overflow: hidden;
  width: 70%;
  text-align: center;
  margin: 0 auto;
  height: auto;
  flex-wrap: wrap;
}
.item {
  background-color: #FC440F;
  display: inline-block;
  margin: 0 0 1em 0;
  width: calc((100% - 2em) / 3);
  padding-top: 40%;
  height: 0;
  background: url(/images/iceberg.jpg);
  background-size: cover !important;
  overflow: hidden;
  cursor: pointer;
}
.category {
  color: #FC440F;
  z-index: 100;
  position: relative;
  bottom: 50px;
  text-align: left;
}
img:hover {
  height: 120%;
  transition: .5s;
}
img {
  transition: .5s;
}
@media screen and (max-width: 820px) {
  .item {
    width: calc((100% - 1em) / 2);
    padding-top: 65%;
    margin: 0 0 2em 0;
  }
}
@media screen and (max-width: 620px) {
  .item {
    width: calc((100% - 1em));
    padding-top: 120%;
    margin: 0 0 2em 0;
  }
  .item:hover .onHover{
    opacity: 0;
  }
}
</style>
