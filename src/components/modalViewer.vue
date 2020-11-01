<template>
<div class="fillscreen">
  <p>HELLO!</p>
  <p>HELLO!</p>
  <p>HELLO!</p>
  <div>
    <div class="modal">
      <div class="item">
        <div class="modal_image">
          <a href="#">
            <p>HELLO!</p>
            <img :src="'/images/' + current.img">
          </a>
        </div>
        <div class="category">
          <p>.{{current.category}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "modalViewer",
  props: {
    current: Object,
    showModal: Boolean,
  },
  сomputed: {
    showModal() {
      //return this.$root.$data.showModal;
      return true;
    }
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="css" scoped>
  .fillscreen {
    align-items: stretch;
    height: 100%;


  }
  .modal {
    flex-grow: 1;
    width: 100%;
    background-color: rgba(255, 0, 0, 0.5);
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;
  }
  .modal_image {

  }
  img {
    width: 80%;
  }

</style>
