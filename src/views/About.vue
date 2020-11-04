<template>
<div>
  <div class="grid">

  </div>
  <div class="sidebar">
    <p>Hi! I'm <span class="bold">Zach.</span> I'm currently a student at <span class="bold">Brigham Young University</span> studying <span class="bold">bioinformatics,</span> although I used to study <span class="bold">graphic design.</span> I'm
      also learning <span class="bold">web code.</span></p>
    <p>I've worked at:</p>
    <ul>
      <li><span class="bold">BYU Continuing Education</span> from April, 2020 to September, 2020 doing <span class="bold">graphic design,</span></li>
      <li><span class="bold">The Ballard Center</span> from January, 2020 to September, 2020 doing <span class="bold">graphic design,</span></li>
      <li>and <span class="bold">The Wall</span> since September of 2019, also doing <span class="bold">graphic design.</span></li>
      <li>I also interned at <span class="bold">BYU Publications & Graphics</span> during June of 2015.</li>
    </ul>
    <p>I am proficient in:</p>
    <p><span class="bold">Adobe Illustrator, InDesign, Photoshop, HTML, CSS, Javascript, Aftereffects, film photography, drawing/painting, & Russian.</span></p>
    <p>I am interested in:</p>
    <p><span class="bold">design, biology, the environment, art, programming, hiking, data visualization, music, photography, math, climbing, gardening, Russian literature, ice-skating, book-binding, & cheese-making.</span></p>
  </div>
  <div class="main">
    <img src="/images/zach.png" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: "About",
  components: {

  },
  computed: {
    about() {
      return this.$root.$data.portfolio;
    }
  }
}
</script>

<style lang="css" scoped>
.main img{
  height: auto;
  overflow-y: scroll;
  z-index: -200;
  width: 50vw;
  position: absolute;
  left: 0;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  padding: 20px 0 0 0;
}
.sidebar {
  text-align: left;
  padding: 30px 100px 30px 30px;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  font-size: 2em;
}
.sidebar li, .sidebar p {
  color: blue !important;
}
.sidebar p {
  padding: 0;
  margin: 20px 0 0 0;
}
</style>
