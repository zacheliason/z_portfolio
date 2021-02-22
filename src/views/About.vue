<template>
<div>
  <div class="grid">
  <div class="sidebar">
    <p>Hi! I'm <span class="bold">Zach.</span> I'm currently a student at <span class="bold">Brigham Young University</span> studying <span class="bold">bioinformatics,</span> although I used to study <span class="bold">graphic design </span>so you might see some of my old portfolio pieces on this website.</p>
    <br>
    <p>Work experience:</p>
    <ul>
      <li>I've worked at<span class="bold">BYU</span> as a <span class="bold">computer science TA</span> for the web design class since January 2021 and I love it!</li>
      <li>I was at <span class="bold">BYU Continuing Education</span> from April 2020 to September 2020 doing <span class="bold">graphic design,</span></li>
      <li><span class="bold">The Ballard Center</span> from January 2020 to September 2020 doing <span class="bold">graphic design,</span></li>
      <li>and <span class="bold">The Wall</span> from September of 2019 to January of 2021, also doing <span class="bold">graphic design.</span></li>
      <li>During June of 2015, I also interned at <span class="bold">BYU Publications &#38; Graphics.</span></li>
    </ul>
    <br>
    <p>I am proficient in <span class="bold">Javascript, Vue.js, HTML, CSS, Python, Node.js, MongoDB, Adobe Illustrator, InDesign, Photoshop, Aftereffects, film photography, drawing/painting, &#38; Russian. I also have some experience using SQL.</span></p>
    <br>
    <p>I have interests in <span class="bold">coding, ecology, biology, design, art, hiking, data visualization, music, photography, math, climbing, gardening, Russian literature, ice-skating, book-binding, &#38; cheese-making.</span></p>
    <div class="spacer">

    </div>
  </div>
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
.spacer {
  height: 40px;
width: 100%;
}
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
.grid {
  display: flex;
  justify-content: center;
  width: 100vw;
}
.sidebar {
  text-align: left;
  padding: 30px 7%;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
  font-size: 2em;
  margin: 0 auto;
  z-index: 0;
}
.sidebar li, .sidebar p {
  color: rgb(0,255,255) !important;
}
.sidebar p {
  padding: 0;
  margin: 20px 0 0 0;
}
@media screen and (max-width: 620px) {
  .sidebar {
    width: 100vw;
  }
}
</style>
