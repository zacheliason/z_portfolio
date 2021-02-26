<template>
<div class="lookHere" id="subpage">
  <div id="top">
    <ul>
      <li id="design1"><a @click="select('design')" href="#">/01_<span class="bold">Design</span></a></li>
      <li id="photos1"><a @click="select('photo')" href="#">/02_<span class="bold">Photos</span></a></li>
      <li id="art1"><a @click="select('art')" href="#">/03_<span class="bold">Art</span></a></li>
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
      return this.$root.$data.items.filter(item => containsObject(this.$root.$data.selectCategory, item.category)).sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });
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
.lookHere {
  height: 100%;
}

#top {
  position: fixed;
  z-index: 999;
  mix-blend-mode: multiply;
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

#art1 a:hover,
#design1 a:hover,
#photos1 a:hover {
  color: #5A00FF
    /*blue*/
     !important;
}

#art1,
#design1,
#photos1 {
  mix-blend-mode: multiply;
  z-index: 9999 !important;
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

@media screen and (max-width: 740px) {

  .arrow_left,
  .arrow_right,
  .arrow_up {
    display: none !important;
    opacity: 0;
  }


  #art1,
  #design1,
  #photos1 {
    font-size: 1em;
    top: 3em
  }

  #photos1 {
    top: 5em;
  }

  #art1 {
    top: 7em;
  }

}
</style>
