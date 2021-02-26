<template>
<div class="wrapper">
  <modalViewer :current="current" />

  <div class="items" v-bind:class="{ itemsHov: this.$root.$data.wideScreen }" id="items" ref="items">
    <div class="itemHolder" @mouseover="addBars(item.id)" @mouseout="fadeBars(item.id)" v-for="item in items" :key="item.id">

      <!--  <lazy-background class="item" @click="modalSwitchOn(item)" :image-source="'/images/' + item.image[0] " loading-image="/images/Iceberg.jpg" error-image="/images/Iceberg.jpg" image-class="cam-viewport" background-size="cover"
        :image-success-callback="successCallback" :image-error-callback="errorCallback">
      </lazy-background>-->
      <div class="item" @click="modalSwitchOn(item)" v-bind:style="'background: url(/images/' + item.image[0] + ') no-repeat center top;'">
      </div>

      <p class="caption">{{item.name}}</p>
      <hr :id="item.id">
      <p class="date">{{item.date}}</p>

    </div>

  </div>
  <div class="spacer">

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
    return {
      timeout1: ()=>{},
      timeout2: ()=>{}
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
    addBars(id) {
      if (this.$root.$data.wideScreen) {
        clearTimeout(this.timeout1);
      //  clearTimeout(this.timeout2);
        document.getElementById(id).style.opacity = "1";
        this.timeout1 = setTimeout(() => document.getElementById(id).style.transition = "1s", 10);
        this.timeout2 = setTimeout(() => document.getElementById(id).style.width = "50%", 10);
      }
    },
    fadeBars(id) {
      if (this.$root.$data.wideScreen) {
        clearTimeout(this.timeout1);
        //clearTimeout(this.timeout2);
        document.getElementById(id).style.transition = ".3s";
        document.getElementById(id).style.width = "0";
        this.timeout1 = setTimeout(() => document.getElementById(id).style.transition = "all 0s", 250);
        this.timeout2 = setTimeout(() => document.getElementById(id).style.opacity = "0", 250);
      }
    },
    modalSwitchOn(item) {
      document.getElementById("top").style.zIndex = "-100";
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
  }
}
</script>

<style lang="css" scoped>
.spacer {
  height: 70px;
  width: 100vw;
  background-color: white;
  z-index: -999;
}
.art,.design,.photos,.all {
  padding: .5em 1em;
  display: inline-block;
  background-color: white;
}
.hr:hover {
  animation: hrFrames .3s ease forwards;
}

.itemHolder {
  transition: 1s;
  animation: fadeIn .3s ease forwards;
  margin: 0 .5em;
}
.itemsHov {
  transition: 1s !important;
}
.itemsHov:hover > *:not(:hover) {
  opacity: .9 !important;
  transition: 1s !important;
}

hr {
  color: #5A00FF /*blue*/;
  opacity: 0;
  transition: 0s;
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
  -moz-column-gap: 1em;
  -webkit-column-gap: 1em;
  overflow: hidden;
  width: 72vw;
  margin: 70px auto 0 auto;
  height: auto;
  flex-wrap: wrap;
}
.item {
  transition: 1s;
  background-color: #FC440F;
  display: inline-block;
  margin: 20px 0 0 0;
  width: calc((70vw - 4em) / 3);
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
    width: calc((100% - 3em) / 2);
    padding-top: 0;
    margin: 0 .5em 2em .5em;
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
