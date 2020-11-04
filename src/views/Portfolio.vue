<template>
<div class="lookHere">
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <div class="centerv">
        <li class="pure-menu-item" id="art1"><a @click="select('art')" href="#" class="pure-menu-link">.01 <span class="bold">Art</span></a></li>
      </div>
      <div class="center">
        <li class="pure-menu-item" id="design1"><a @click="select('design')" href="#" class="pure-menu-link">.02 <span class="bold">Design</span></a></li>
      </div>
      <div class="centerv">
        <li class="pure-menu-item" id="photos1"><a @click="select('photo')" href="#" class="pure-menu-link">.03 <span class="bold">Photos</span></a></li>
      </div>
    </ul>
    <div class="center centerv back" v-if="selectEmpty">
      <div class="arrow_left">
      </div>
      <div class="arrow_up">
      </div>
      <div class="arrow_right">
      </div>
    </div>
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
  data() {
    return {}
  },
  methods: {
    select(string) {
      this.$root.$data.selectCategory = string;
    },
  },
  computed: {
    items() {
      return this.$root.$data.items.filter(item => containsObject(this.$root.$data.selectCategory, item.category));
    },
    selectEmpty() {
      if (this.$root.$data.selectCategory === '') return true;
      else return false;
    }
  },
}

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }
  return false;
}
</script>

<style media="screen">
.back {
  z-index: -100;
}

.lookHere {
  height: 100%;
}

.arrow_up {
  border-width: 6px 6px 0 0;
  height: 20px;
  width: 20px;
  border-color: rgb(255,255,0);
  border-style: solid;
  transform: rotate(-45deg);
  position: relative;
  bottom: 100px;
  animation: up 1s steps(4, start) infinite alternate;
}

.arrow_right {
  border-width: 6px 6px 0 0;
  height: 20px;
  width: 20px;
  border-color: rgb(255,255,0);
  border-style: solid;
  transform: rotate(45deg);
  position: relative;
  left: 100px;
  animation: right 1s steps(4, start) infinite alternate;

}

.arrow_left {
  border-width: 6px 6px 0 0;
  height: 20px;
  width: 20px;
  border-color: rgb(255,255,0);
  border-style: solid;
  transform: rotate(-135deg);
  position: relative;
  right: 100px;
  animation: left 1s steps(4, start) infinite alternate;

}

@keyframes up {
  from {
    bottom: 100px;
  }

  to {
    bottom: 160px;
  }
}

@keyframes left {
  from {
    right: 100px;
  }

  to {
    right: 160px;
  }
}

@keyframes right {
  from {
    left: 100px;
  }

  to {
    left: 160px;
  }
}

.center {
  display: flex;
  justify-content: center;
  width: 100vw;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  mix-blend-mode: multiply;
}

.bold {
  font-weight: bolder;
}

.centerv {
  display: flex;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  mix-blend-mode: multiply;
}

#art1,
#design1,
#photos1 {
  position: fixed;
  mix-blend-mode: multiply;
}

#art1:hover,
#design1:hover,
#photos1:hover {
  font-size: 1.5 em;
  font-style: italic;
}

#design1 {
  top: .5em;
}

#art1 {
  left: .5em;
  writing-mode: vertical-lr;
  text-orientation: sideways;
}

#photos1 {
  right: .5em;
  writing-mode: vertical-lr;
  text-orientation: sideways;
}

@media screen and (max-width: 620px) {

  .arrow_left,
  .arrow_right,
  .arrow_up {
    display: none !important;
    opacity: 0;
  }

  #art1,
  #design1,
  #photos1 {
    position: fixed;
    text-align: right;
    top: 2em;
    right: 0;
    writing-mode: unset;
    text-orientation: unset;
    font-size: 1.5em;
  }

  #design1 {
    top: 4em;
  }

  #photos1 {
    top: 6em;
  }

}
</style>
