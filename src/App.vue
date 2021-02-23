<template>
<div id="app">
  <div id="nav" @click="this.$root.setTimer" @mouseover="this.$root.fadeSubPage" @mouseout="this.$root.fadeInSubPage">
    <router-link id="zach" class="showOnMobile" to="/">Home</router-link>
    <router-link id="zach" class="hideOnMobile" to="/">Zach Eliason</router-link>
    <router-link id="about" to="/about">About</router-link>
    <router-link id="portfolio" class="showOnMobile" to="/portfolio">Portfolio</router-link>
    <router-link id="portfolio" class="hideOnMobile" to="/portfolio">Design Portfolio</router-link>
    <router-link id="coding" to="/coding">Coding</router-link>

  </div>
  <router-view />
</div>
</template>
<script type="text/javascript">

/**/

</script>
<style>
#id {
  height: 100%;
}
#nav {
  mix-blend-mode: multiply;
  z-index: 100;
  position: fixed;
}

#app {}

#zach {
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 800;
      color: #24CFFA /*teal*/ !important;
  text-decoration: none;

  position: fixed;
  font-size: 3em;
  top: .2em;
  left: .45em;
}

#portfolio {
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 800;
      color: #24CFFA /*teal*/ !important;
  ;
  text-decoration: none;

  position: fixed;
  font-size: 3em;
  top: .2em;
  right: .45em;
}

#about {
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 800;
      color: #24CFFA /*teal*/ !important;
  ;
  text-decoration: none;

  position: fixed;
  font-size: 3em;
  bottom: .2em;
  left: .45em;
}
footer {
  display: flex;
  justify-content: center;
}
footer a:hover {
    font-size: 3em;
  transition: .5s;
}
footer a {
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 800;
      color: #24CFFA /*teal*/ !important;
  ;
  text-decoration: none;
  position: fixed;
  font-size: 3em;
  bottom: .2em;
}


#coding {
  font-family:
  bc-novatica-cyr, sans-serif;
  font-weight: 800;     color: #24CFFA /*teal*/ !important;
  ;
  text-decoration: none;

  position: fixed;
  font-size: 3em;
  bottom: .2em;
  right: .45em;
}

#zach:hover,
#coding:hover,
#about:hover,
#portfolio:hover {
  font-size: 5em;
  transition: .5s;
  letter-spacing: 2px;
}

#zach,
#coding,
#about,
#portfolio {
  z-index: 10000 !important;
  transition: .5s;

}
#zach,
#portfolio {
}
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  margin: 0;
}
li {
  font-size: 2em;
}
h1 {
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 800;
}

p {
  font-family: mrs-eaves, serif;
  color: black;
  font-weight: normal;
  font-size: 2em;
}

a,
li {
  text-decoration: none;
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 800;
  color: #24CFFA /*teal*/;
  list-style-type: none;

}

body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
}
.showOnMobile {
  opacity: 0 !important;
}



@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slideInFromTop {
  0% {
    transform: translateY(-200%);
  }
  100% {
    transform: translateY(0);
  }
}
@media screen and (max-width: 740px) {
  #zach,
  #coding,
  #about,
  #portfolio {
    font-size: 2em;
  }
  #zach:hover,
  #coding:hover,
  #about:hover,
  #portfolio:hover {
    font-size: 3em;
    transition: .5s;
  }
  .showOnMobile {
    display: inline-block;
    opacity: 1.0 !important;
    z-index: 101 !important;
  }
  .hideOnMobile {
    display: none !important;
  }

  footer {
    bottom: .1em;
  }
}
</style>
