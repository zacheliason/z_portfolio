<template>
<div class="wrapper" >
  <div class="items" v-bind:class="{ itemsHov: this.$root.$data.wideScreen }" id="items" ref="items">
    <div class="itemHolder" @hover="addBars(item.id)" v-for="item in items" :key="item.id">

    <!--  <lazy-background class="item" @click="modalSwitchOn(item)" :image-source="'/images/' + item.image[0] " loading-image="/images/Iceberg.jpg" error-image="/images/Iceberg.jpg" image-class="cam-viewport" background-size="cover"
        :image-success-callback="successCallback" :image-error-callback="errorCallback">
      </lazy-background>-->
      <div class="item" @click="modalSwitchOn(item)" v-bind:style="'background: url(/images/' + item.image[0] + ') no-repeat center top;'">
      </div>

      <p class="caption">{{item.name}}</p>
      <hr :id="item.id">
      <p class="date">{{item.date}}</p>

      <modalViewer :current="current" />
    </div>

  </div>
</div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import modalViewer from "../components/modalViewer.vue";
//import VueLazyBackgroundImage from 'vue-lazy-background-images'
export default {
  name: "imageViewer",
  components: {
    modalViewer,
    //VueLazyBackgroundImage
  },
  props: {
    items: Array,
  },
  data() {
    return {}
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
    addBars(id) {
      setTimeout(() => document.getElementById(id).style.animation = "animation: hrFramesOut .3s forwards",500);
    },
    modalSwitchOn(item) {
      document.getElementById("top").style.zIndex = "-100";
      document.getElementById("nav").style.animation = "fadeOut .5s ease forwards";
      setTimeout(() => document.getElementById("nav").style.display="none",500);
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
.itemHolder:hover hr{
  animation: hrFrames 1s forwards;
}
.itemHolder {
  transition: .3s;
  animation: fadeIn .3s ease forwards;

}
.itemsHov:hover > *:not(:hover) {
  opacity: .7;
  transition: .3s;
}
@keyframes hrFrames {
  0% {
    opacity: 0;
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    width: 50%;
    opacity: 1;
  }
}
@keyframes hrFramesOut {
  0% {
    width: 50%;
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    width: 0;
    opacity: 0;
  }
}

hr {
  opacity: 0;
  color: #5A00FF /*blue*/;
  transition: .3s;
  width: 0;
  margin: 0 50% 0 0;
  text-align: left;
  border-style: solid;
}
.caption {
  font-size: 1.3em;
  font-style: italic;
  margin: 0;
  text-align: left !important;
}
.date {
  margin: 0;
letter-spacing: 1px;
font-size: 1em;
font-weight: bolder;
 font-family: mrs-eaves-roman-all-small-ca, mrs-eaves, sans-serif !important;
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
  transition: 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1em;
  -moz-column-gap: 1em;
  -webkit-column-gap: 1em;
  overflow: hidden;
  width: 72vw;
  margin: 70px auto 50px auto;
  height: auto;
  flex-wrap: wrap;
}
.item {
  transition: 1s;

  background-color: #FC440F;
  display: inline-block;
  margin: 20px 0 0 0;
  width: calc((70vw - 2em) / 3);
  padding-top: 120%;
  height: 0;
  background: url(/images/iceberg.jpg);
  background-size: cover !important;
  overflow: hidden;
  cursor: pointer;
}
.category {
  color: #FC440F;
  position: relative;
  bottom: 50px;
  text-align: left;
}

@media screen and (max-width: 820px) {
  .itemHolder {
    width: calc((100% - 2em) / 2);
    padding-top: 0;
    margin: 0 0 2em 0;
  }
  .items {
    column-gap: 2em;
    width: 80vw;
  }
  .item {
    width: 100%;
  }
}
@media screen and (max-width: 620px) {
  hr {
    width: 60%;
    opacity: 1;
    margin: 3px 0;
  }
  .itemHolder {
    width: 100%;
    padding-top: 0;
    margin: 0 0 2em 0;
  }
  .item {
    width: 100%;
  }
  .items {
    width: 80vw;
  }

}
</style>
