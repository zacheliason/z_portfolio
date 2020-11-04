<template>
<div id="app">
  <div id="nav">
      <router-link id="zach" to="/">Zach Eliason</router-link>
    <router-link id="about" to="/about">About</router-link>
    <router-link id="portfolio" to="/portfolio">Design Portfolio</router-link>
    <router-link id="coding" to="/webcode">Web Code</router-link>

  </div>
  <router-view />
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
  color: red !important;
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
  color: red !important;
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
  color: red !important;
  mix-blend-mode: multiply;
  text-decoration: none;

  position: fixed;
  font-size: 2.5em;
  bottom: -.2em;
  left: 0;
}

#coding {
  font-family: bc-novatica-cyr, sans-serif;
  font-weight: 700;
  color: red !important;
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style>
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
  color: red;
  mix-blend-mode: multiply;
}

a,
li {
  text-decoration: none;
  font-family: bc-novatica-cyr, sans-serif;
  color: red;
  list-style-type: none;

}

body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
}
</style>
