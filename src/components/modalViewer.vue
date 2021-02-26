<template>
<div id="modal" class="modal" v-if="showModal2" ref="modal">
  <div class="main" id="main">
    <img @load="orientation(image)" :id="image" v-for="image in images" :key="image.id" :src="'/images/' + image ">
    <div class="sidebar">
      <div id="exit" @click="modalOff"> &#x2715;</div>

      <div class="object">
        <h1>{{current.name}}</h1>
        <hr>
        <p class="date small">{{current.date}}<span class="blue"> &#xb7; </span>files: {{current.img.length}}</p>
        <p id="smallerMarg">{{current.description}}</p>
        <div class="tagsbox">
          <p id="tagline" class="inline">Tags:</p>
          <a href="#" v-bind:style="'background-color: ' + getRandomColor()" @click="select(tag); modalOff();" :class="'tags ' + tag" v-for="tag in tags" :key="tag.id">{{tag}}</a>
        </div>
      </div>
    </div>
    <div v-if="current.img.length != 1" class="spacer"></div>
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
      document.getElementById("top").style.zIndex = "999";
      document.getElementById("nav").style.display = "block";
      document.getElementById("nav").style.animation = "fadeIn .5s ease forwards";
      this.$root.$data.showModal = false;
    },
    select(string) {
      this.$root.$data.selectCategory = string;
    },
    getRandomColor() {
      return "hsl(" + 360 * Math.random() + ',' +
        (70 + 10 * Math.random()) + '%,' +
        (50 + 10 * Math.random()) + '%)'
    },
    orientation(image) {
      if (this.$root.$data.wideScreen) {
        var element = document.getElementById(image);
        if (this.$root.$data.current.img.length == 1) {
          element.classList.add("last");
        }
        let screenWidth = document.getElementById("main").offsetWidth;
        let screenHeight = window.innerHeight;
        var hght = element.height;
        var wdth = element.width;

        if ((hght / wdth < .9) || (screenHeight > screenWidth)) {
          element.id = "landscape";
        } else {
          element.id = "portrait";
        }
      }
    },
  }
}
</script>


<style lang="css" scoped>
h1 {
  margin:0;
}
.blue {
  color: #5A00FF /*blue*/;
}
hr {
  color: #5A00FF /*blue*/;
  width: 60%;
  margin: 10px 50% 10px 0;
  border-style: solid;
  border-width: 1px;

}
#portrait {
  padding: 30px 30px 0 30px;
  height: calc(100vh - 30px);
}

#landscape {
  padding: 30px 30px 0 30px;
  width: calc(100% - 30px);
}
#tagline {
  opacity: 1 !important;
}
.last {
  padding: 30px !important;

}
.small {
  font-size: 1.5em;
  width: 100%;
}
.{
  float: right;
}

.date {
  margin: 0;
letter-spacing: 1px;
 font-family: mrs-eaves-roman-all-small-ca, mrs-eaves, sans-serif !important;
}
#exit:hover {
  transform: scale(1.4);
}
#exit {
  transform-origin: center;
  transition: .3s;
  position: fixed;
  right: 30px;
  top: 20px;
  padding: 10px 15px 7px 15px;
  border-radius: 100px;
  color: #5A00FF /*blue*/;
  font-size: 2em;
  font-weight: bolder;
  z-index: 9999999999999;
  cursor: pointer;
}
  .inline {
    display: inline-block;
    padding-right: 10px;
    margin: 0 0 10px 0;

  }/*
  .tagsbox:hover > *:not(:hover) {
    opacity: .7;
    transition: .4s;
  }*/
  .tagsbox {
    transition: .3s;
  }
  .tags {
    transition: .3s;
    color: white;
    display: inline-block;
    width: auto;
    border-radius: 15px;
    padding: 2px 10px;
    font-weight: bolder;
    margin: 0px 20px 20px 0px;
  }
  .spacer {
    width: 100%;
    height: 30px;
  }
  .object {

    border-width: 0 0 0 3px;
    border-color: #5A00FF /*blue*/;
    padding: 30px 30px 0 30px;
    border-style: solid;
  }

  .modal {
    animation: fadeIn .5s ease forwards;

    height: auto;
    width: 100vw;
    background-color: white;
    position: fixed;
    z-index: 99999999999999999;
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
    width: 65%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: scroll;
    left: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  .sidebar {
    text-align: left;
    height: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 35%;
    font-size: 1em;
    color: #24CFFA /*teal*/;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  #smallerMarg {
    margin: 10px 0 !important;
  }

  @media screen and (max-width: 620px) {
    .modal {
      background-color: white;
      z-index: 10000;
    }
    .sidebar {
      text-align: left;
      height: auto;
      position: static !important;
      display: block;
      width: 100%;
      font-size: 1em;
      z-index: 100000;

    }

    .object {
      border-width: 0;
      padding: 15px 30px 0 30px;
    }
    .main {
      padding-top: 80px;
      display: block;
      width: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
      left: 0;
      z-index: 10000;

    }
    img {
      padding: 20px 20px 0 20px;
      width: 100% !important;
      height: unset !important;
      background-color: white;
    }
    .modal,.main,.sidebar {
    }
    #exit {
      right: 25px;
    }
    p {
      font-size: 1.5em;
    }
  }
</style>
