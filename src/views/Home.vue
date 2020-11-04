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
  <div class="flexer">
    <div class="circleMobile">

    </div>
    <div class="circleMobile">

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
  animation: scroll 3s ease-in-out alternate infinite;
}

@keyframes scroll {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(.9);
  }

}

.circle {
  height: 50vh;
  width: 50vh;
  border-radius: 1000vh;
  background-color: rgb(0,255,255);
  z-index: -1;
  margin: 0;
}


.square {
  height: 50vh;
  width: 50vh;
  background-color: rgb(0,255,255);
  z-index: -1;
  animation: rotate 3s linear infinite;
  margin: 10px;
}

.r {
  animation: shrink 3s ease-in-out alternate infinite;
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

@keyframes shrink {
  from {
    transform: scale(.999);
  }

  to {
    transform: scale(.4);
  }
}

.circleMobile {
  height: 0;
  width: 0;
}

@media screen and (max-width: 620px) {
  .circle {
    height: 0vw;
    width: 0vw;
  }
  .flexer {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    text-align: center;
  }
  .containtop,
  .containbottom {
    display: none;
  }

  .circleMobile {
    height: 100vw;
    width: 100vw;
    animation: shrinkm 3s ease-in-out alternate infinite;
    border-radius: 1000vh;
    background-color: rgb(0,255,255);
    z-index: -1;
    margin: 0;
  }

  .home,
  .containtop,
  .containbottom {
    animation: unset;
    height: 150vh;
    width: 100vw;
  }


  .containtop {
    height: 100vh;
    width: 40vw;
    right: 0;
    position: relative;

  }

  .containbottom {
    height: 100vh;
    width: 40vw;
    left: 0;
    position: relative;

  }
  @keyframes shrinkm {
    from {
      transform: scale(.7);
    }

    to {
      transform: scale(1.2);
    }
  }



}
</style>
