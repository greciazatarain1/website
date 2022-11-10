<template>
  <Section id="slider">
    <ul class="slider-container">
      <li v-for="(image, index) in images" :key="index">
        <img alt="" :src="image"  :class="{ active: index === currentImage }" />
      </li>
    </ul>
    <div class="slider-buttons">
      <span ref="btnSlider" @click="previousImage()" class="btn-slider previous" ><i class="fa-solid fa-chevron-left"></i></span>
      <span @click="nextImage()" class="btn-slider next"><i class="fa-solid fa-chevron-right"></i></span>
    </div>
  </Section>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        require("@/assets/slide-1.jpg"),
        require("@/assets/slide-2.jpg"),
        require("@/assets/slide-3.jpg"),
        require("@/assets/slide-4.jpg"),
        require("@/assets/slide-5.jpg"),
      ],
      currentImage: 0,
      
    }
  },
  methods: {
    nextImage(){
      if(this.currentImage !== this.images.length - 1) {
        this.currentImage++
      }
    },
    previousImage(){
      if(this.currentImage !== 0) {
        this.currentImage--
      } 
    }

  },
  mounted() {
    const btnSliderHeight = this.$refs.btnSlider.clientHeight;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#slider {
  position: relative;

  .slider-container {
    position: relative;
    height: 245px;
    overflow: hidden;

    @include desktop {
      height: 600px;
    }

    li {
      position: absolute;
      
    }
  }

  img {
    width: 100%;
    opacity: 0;
    transition: 0.2s ease-out;
    filter: grayscale(100%);

    &.active {
      opacity: 1;
    }
  }

  .slider-buttons {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn-slider {
      color: white;
      cursor: pointer;
      font-size: 30px;
      display: inline-block;
      opacity: 0.8;
      padding: 10px;

      &:hover {
        opacity: 0.5;
      }
    }
  }
} 
</style>

