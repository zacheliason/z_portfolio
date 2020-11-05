<template>
<div id="app">
  <div id="nav">
    <router-link id="zach" class="showOnMobile" to="/">Home</router-link>
    <router-link id="zach" class="hideOnMobile" to="/">Zach Eliason</router-link>
    <router-link id="about" to="/about">About</router-link>
    <router-link id="portfolio" class="showOnMobile" to="/portfolio">Portfolio</router-link>
    <router-link id="portfolio" class="hideOnMobile" to="/portfolio">Design Portfolio</router-link>
    <router-link id="coding" to="/webcode">Web Code</router-link>

  </div>
  <router-view />
  <footer> <a target="_blank" href="https://github.com/zippy-dog/z_portfolio">Github</a></footer>
</div>
</template>

<style>
#id {
  height: 100%;
}

#app {}

#zach {
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 700;
  color: rgb(255,0,255) !important;
  mix-blend-mode: multiply;
  text-decoration: none;

  position: fixed;
  font-size: 2.5em;
  top: -.25em;
  left: 0;
}

#portfolio {
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 700;
  color: rgb(255,0,255) !important;
  mix-blend-mode: multiply;
  text-decoration: none;

  position: fixed;
  font-size: 2.5em;
  top: -.25em;
  right: 0;
}

#about {
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 700;
  color: rgb(255,0,255) !important;
  mix-blend-mode: multiply;
  text-decoration: none;

  position: fixed;
  font-size: 2.5em;
  bottom: -.2em;
  left: 0;
}
footer {
  display: flex;
  justify-content: center;
}
footer a:hover {
  font-style: italic;
  font-size: 3em;
}
footer a {
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 700;
  color: rgb(255,0,255) !important;
  mix-blend-mode: multiply;
  text-decoration: none;
  position: fixed;
  font-size: 2.5em;
  bottom: -.2em;
}


#coding {
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 700;
  color: rgb(255,0,255) !important;
  mix-blend-mode: multiply;
  text-decoration: none;

  position: fixed;
  font-size: 2.5em;
  bottom: -.2em;
  right: 0;
}

#zach:hover,
#coding:hover,
#about:hover,
#portfolio:hover {
  font-style: italic;
  font-size: 3em;
}

#zach,
#coding,
#about,
#portfolio {
  padding: -1em;
  z-index: 10000;
}
#zach,
#portfolio {
  z-index: 1000000000;
}
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  margin: 0;
}

h1 {
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 700;
}

p {
  font-family: bc-novatica-cyr, sans-serif;
  color: rgb(255,0,255);
  mix-blend-mode: multiply;
}

a,
li {
  text-decoration: none;
  font-family: bc-novatica-cyr, sans-serif;
  color: rgb(255,0,255);
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

@media screen and (max-width: 620px) {
  .showOnMobile {
    display: inline-block;
    opacity: 1.0 !important;
    z-index: 100000;
  }
  .hideOnMobile {
    display: none !important;
  }
  #about, #coding {
    writing-mode: vertical-lr;
    text-orientation: sideways;
    bottom: .1em;
  }
  footer {
    bottom: .1em;
  }
}
</style>
