<template>
<div class="home">
  <div class="containtop">
    <div class="circle ">
    </div>
    <div class="circle r ">
    </div>
    <div class="circle ">
    </div>
    <div class="circle r ">
    </div>
    <div class="circle ">
    </div>
    <div class="circle r ">
    </div>
    <div class="circle ">
    </div>
    <div class="circle r ">
    </div>
    <div class="circle ">
    </div>
    <div class="circle r ">
    </div>
    <div class="circle ">
    </div>
    <div class="circle r ">
    </div>
  </div>
  <div class="containbottom">
    <div class="circle r ">
    </div>
    <div class="circle ">
    </div>
    <div class="circle r ">
    </div>
    <div class="circle ">
    </div>
    <div class="circle r ">
    </div>
    <div class="circle ">
    </div>
    <div class="circle r ">
    </div>
    <div class="circle ">
    </div>
    <div class="circle r ">
    </div>
    <div class="circle ">
    </div>
    <div class="circle r ">
    </div>
    <div class="circle ">
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  compnts: {}
};
</script>

<style media="screen">
.home {
  height: 100vh;
  width: 150vw;
  top: 0;
  left: -25vw;
  position: absolute;
  overflow: hidden;
  bottom: 0;
  margin: 0 auto;
  text-align: center;
  z-index: -1;
  animation: scroll 3s alternate infinite;
}

@keyframes scroll {
  from {left: -25vw;}
  to {left: -30vw;}
}
.circle {
  height: 50vh;
  width: 50vh;
  border-radius: 1000px;
  background-color: blue;
  z-index: -1;
  animation: rotate 10s linear infinite;
  margin: 0;
}


.square {
  height: 50vh;
  width: 50vh;
  background-color: blue;
  z-index: -1;
  animation: rotate 3s linear infinite;
  margin: 10px;
}

.r {
  animation: shrink 3s alternate infinite ;
}

.containtop {
  display: flex;
  z-index: -1;
  position: fixed;
  justify-content: center;
  height: 50vh;
  width: 100%;
  flex-wrap: wrap;
  position: absolute;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
  top: 0;
}
.containbottom {
  display: flex;
  z-index: -1;
  position: fixed;
  bottom: 0;
  right: 0;
  justify-content: center;
  height: 50vh;
  width: 100%;
  flex-wrap: wrap;
  position: absolute;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes shrink {
  from {
    transform: scale(.999);
  }

  to {
    transform: scale(.4);
  }
}
</style>
