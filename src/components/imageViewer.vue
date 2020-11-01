<template>
<div class="wrapper">
  <div class="items">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="image">
        <a href="#">
          <img :src="'/images/' + item.image[0]">
        </a>
      </div>
      <div class="category">
        <p>.{{item.category[0]}}</p>
      </div>
    </div>
  </div>
  <div class="flexdiv">
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
    items: Array
  },
  data() {
    return {

    }
  },
  computed: {
    current() {
      return this.$root.$data.current;
    },
  }
}
</script>

<style lang="css" scoped>

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
.image {
  height: 80%;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  text-align: center;
}
.items {
  column-count: 3;
  column-gap: 50px;
  overflow: hidden;
  width: 70%;
  text-align: center;
  margin: 0 auto;
}
.item {
  height: 400px;
  width: 300px;
}
.category {
  color: red;
  z-index: 100;
  position: relative;
  bottom: 50px;
  text-align: left;
}
img:hover {
  height: 120%;
}
</style>
