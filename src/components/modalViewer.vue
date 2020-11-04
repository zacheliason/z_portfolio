<template>
<div id="modal" class="modal" v-if="showModal2" ref="modal" @click="modalOff">
  <div class="main">
    <img :id="image" @load="orientation(image)" v-for="image in images" :key="image.id" :src="'/images/' + image ">
  </div>
  <div class="sidebar">
    <div class="object">
      <div class="buffer">
        <h1>{{current.name}}</h1>
      </div>
      <div class="buffer">
        <p>{{current.date}}</p>
      </div>
      <div class="buffer">
        <p>{{current.description}}</p>
      </div>
      <div class="buffer">
        <p>Files: {{current.img.length}}</p>
      </div>
      <div class="buffer">
        <p class="inline">Tags:</p>
        <a href="#" v-bind:style="'background-color: ' + getRandomColor()" @click="select(tag)" :class="'tags ' + tag" v-for="tag in tags" :key="tag.id">{{tag}}</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "modalViewer",
  props: {
    current: Object,
    showModal: Boolean
  },
  computed: {
    showModal2() {
      return this.$root.$data.showModal;
    },
    images() {
      return this.$root.$data.current.img;
    },
    tags() {
      return this.$root.$data.current.category;
    }
  },
  data() {
    return {}
  },
  methods: {
    modalOff() {
      this.$root.$data.showModal = false;
    },
    orientation(image) {
      var element = document.getElementById(image);
      var hght = element.height;
      var wdth = element.width;
      if (hght / wdth < 1) {
        element.classList.add("landscape")
      } else {
        element.classList.add("portrait")
      }
    },
    select(string) {
      this.$root.$data.selectCategory = string;
    },
    getRandomColor() {
      return "hsl(" + 360 * Math.random() + ',' +
        (70 + 10 * Math.random()) + '%,' +
        (50 + 10 * Math.random()) + '%)'
    },
  }
}
</script>


<style lang="css" scoped>
  .inline {
    display: inline-block;
    padding-right: 10px;
    margin: 20px 0 10px 0;

  }
  .tags {
    color: white;
    display: inline-block;
    width: auto;
    border-radius: 15px;
    padding: 2px 10px;
    font-weight: bolder;
    margin: 0px 10px 20px 10px;
  }
  .spacer {
    height: 20px;
  }
  .object {
    border-width: 3px 0 0 0;
    border-color: white;
    border-style: solid;
  }
  .buffer {
    padding: 0 30px;
    border-width: 0 0 3px 0;
    border-color: white;
    border-style: solid;
    width: 100%;
  }
  .modal {
    height: 100% !important;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;
  }
  .main {
    width: 70%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    overflow: scroll;
    left: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  .portrait {
    padding: 20px 20px 0 20px;
    height: calc(100% - 20px);
  }
  .landscape:last-child,.portrait:last-child {
    padding: 20px 20px 20px 20px;
  }
  .landscape {
    padding: 20px 20px 0 20px;
    width: calc(100% - 5px);
  }
  .sidebar p {
    color: white;
  }
  .sidebar {
    text-align: left;
    border-width: 0 0 0 3px;
    height: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    border-color: white;
    border-style: solid;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 30%;
    font-size: 1em;
    color: white;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

</style>
