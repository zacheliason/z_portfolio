<template>
<div id="subpage">
  <div class="profile">
    <div class="rightborder">
      <img src="/images/ZachProfile3.png" alt="">
      <h3>Zach Eliason</h3>
      <p>Bioinformatics student, <span class="place">BYU</span></p>
    </div>

  </div>
  <div class="sidebar">

    <div class="righthalf">
      <div class="half">

      </div>
      <h2>Hi! I'm Zach.</h2>
      <p> I'm currently a student at <span>Brigham Young University</span> studying bioinformatics, although I used to study graphic design so you might see some of my old portfolio pieces on this website!</p>
      <br>
      <h2>I've worked at</h2>
      <ul>
        <li><span class="place">BYU</span> as a computer science <span class="place">TA</span> for the web design class since January 2021,</li>
        <li><span class="place">BYU</span> Continuing Education from April <span class="place">2020</span> to September <span class="place">2020</span> doing graphic design,</li>
        <li>The Ballard Center from January <span class="place">2020</span> to September <span class="place">2020</span> doing graphic design,</li>
        <li>and The Wall from September of <span class="place">2019</span> to January of <span class="place">2021,</span> also doing graphic design.</li>
        <li>During June of <span class="place">2015</span>, I also interned at <span class="place">BYU</span> Publications &#38; Graphics.</li>
      </ul>
      <br>
      <h2>I am proficient in</h2>
      <p><span class="emphasis">Javascript, Vue.js, <span class="place">HTML, CSS, </span> Python, Adobe Illustrator, InDesign, Photoshop, Aftereffects, film photography, drawing/painting, &#38;
          Russian.</span> I also have experience using<span class="emphasis"><span class="place"> SQL,</span> Mongo<span class="place">DB</span>, Node.js,</span> &#38; <span class="emphasis">C++.</span></p>
      <br>
      <h2>I have interests in</h2>
      <p> <span class="emphasis">Coding, ecology, biology, design, art, hiking, data visualization, music, photography, math, climbing, gardening, Russian literature, ice-skating, knitting, book-binding, </span> &#38; <span class="emphasis"> cheese-making.</span></p>
      <p> <span class="smaller place">Website designed and <a href="https://github.com/zacheliason/z_portfolio">coded</a> by Zach Eliason &copy; 2021</span> </p>
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
    },
  },
}
</script>

<style lang="css" scoped>
.smaller {
  font-size: .7em;
}
.smaller a {
  transition: .3s;
  font-family: mrs-eaves-roman-all-small-ca, sans-serif !important;
  color: #5A00FF /*blue*/;
  font-weight: unset;
}
.smaller a:hover {
  color: #24CFFA /*teal*/;
  transition: .5s;
  letter-spacing: 1px;
}
.righthalf {
  overflow-y: scroll;
  padding: 0 60px;
}
.rightborder {
  width: 100%;
  padding: 30px;
  border-width: 0 2px 0 0 ;
  border-color: #24CFFA /*teal*/;
  border-style: solid;
}
.half {
  position: relative;
  top: -10vh;
  height: 40vh;
  width: 50%;
  border-width: 0 5px 0 0 ;
  border-color: #5A00FF /*blue*/;
  border-style: dotted;
}
h2 {
width: 100%;
 font-family: bc-novatica-cyr, sans-serif;
  color: #5A00FF /*blue*/;
  font-size: 2em;
  margin: 0;

}
h3  {
  font-family: bc-novatica-cyr, sans-serif;
  color: #5A00FF /*blue*/;
  font-size: 1.5em;
  padding: 0;
  margin: 0;
}
.profile {
  transform: translateX(-100%);
  animation: slideInFromLeft 1s ease 1s forwards;
  text-align: center;
  z-index: -1000;
  height: 100vh;
  left: 0px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 25vw;
  justify-content: center;
}
.profile p {
  font-family: mrs-eaves, serif;
  font-style: italic;
  font-size: 1.3em;
  padding: 0;
  margin: 0 !important;
  color: black !important;
}
.spacer {
  height: 40px;
width: 100%;
}
.emphasis{
  font-style: italic;
}
.place {

font-family: mrs-eaves-roman-all-small-ca, sans-serif;
}

ul {
  padding: 0;
  margin: 0;
  font-family: mrs-eaves,serif;
  color: black;
  font-style: unset;
}
li {
  padding: 20px 0 0 0;
  font-family: mrs-eaves,serif;
  font-style: unset;
  color: black;
  font-weight: normal;

}
.sidebar {
  animation: 1.7s ease 0s 1 slideInFromTop;
  position: relative;
  float: right;
  text-align: left;
  padding: 0 20px 50px 20px;
  bottom: 0;
  top: 0;
  overflow-y: scroll;
  right: 0;
  width: 75vw;
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  z-index: -1;
  mix-blend-mode: multiply;
}
.sidebar p {
  padding: 0;
  margin: 20px 0 0 0;
  font-family: mrs-eaves, serif;
  color: black;

}
img {
  width: 15vw;
  margin:  0 0 20px 0;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}


@media screen and (max-width: 620px) {
  .sidebar {
    width: 100vw;
  }
  .profile {
    display: none;
  }
}
</style>
