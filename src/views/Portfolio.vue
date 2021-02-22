<template>
<div class="lookHere" id="subpage">
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <div class="center">
        <li class="pure-menu-item" id="design1"><a @click="select('design')" href="#" class="pure-menu-link">/01 <span class="bold">Design</span></a></li>
      </div>
      <div class="centerv">
        <li class="pure-menu-item" id="photos1"><a @click="select('photo')" href="#" class="pure-menu-link">/02 <span class="bold">Photos</span></a></li>
      </div>
      <div class="centerv">
        <li class="pure-menu-item" id="art1"><a @click="select('art')" href="#" class="pure-menu-link">/03 <span class="bold">Art</span></a></li>
      </div>
    </ul>
    <div class="center centerv back" v-if="selectEmpty">
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

#art1 a:hover,
#design1 a:hover,
#photos1 a:hover {
  color: cyan !important;
}

#art1,
#design1,
#photos1 {
  animation: 1s ease .3s 1 slideInFromRight forwards;
  transform: translateX(200%);
  position: fixed;
  text-align: right;
  top: 3em;
  right: 1em;
  writing-mode: unset;
  text-orientation: unset;
  font-size: 1.5em;
}

#photos1 {
  top: 5em;
  animation-delay: .6s;
}

#art1 {
  top: 7em;
  animation-delay: .9s;
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
  }
}
@media screen and (max-width: 620px) {

  .arrow_left,
  .arrow_right,
  .arrow_up {
    display: none !important;
    opacity: 0;
  }



}
</style>
