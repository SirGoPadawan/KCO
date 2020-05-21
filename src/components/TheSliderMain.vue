<template>
  <article>
    <VueSlickCarousel ref="carousel" v-bind="settings">
      <div v-for="slide in sliders" :key="slide.id" class="main-content__slide">
        <img :src="slide.img" class="main-content__slider-img " alt="" />
        <a href="#" class="main-content__slider-row-1 white">{{ slide.text1 }} </a>
        <a href="#" class="main-content__slider-row-2 white">{{ slide.text2 }} </a>
      </div>
    </VueSlickCarousel>
    <div class="main-content__slider-btns">
      <button
        @click="showPrev"
        class="main-content__btn box-arrow arrow-left white"
      ></button>
      <button
        @click="showNext"
        class="main-content__btn box-arrow arrow-right white"
      ></button>
    </div>
  </article>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        dotsClass: "main-content__dot",
        infinite: true,
        speed: 0,
      },
      sliders: [
        {
          id: 1,
          img: "../static/layer-main-block.png",
          text1: "1Lorem Ipsum asdDolor",
          text2: "1Sit ametasdasda",
        },
        {
          id: 2,
          img: "../static/layer-main-block2.png",
          text1: "Lorem Ipsum Dolor2",
          text2: "Sit amet2",
        },
        {
          id: 3,
          img: "../static/layer-main-block3.png",
          text1: "3Lorem Ipsum Dolor",
          text2: "3Sit amet",
        },
      ],
    };
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>
<style scope>
.main-content__slide {
  border-radius: 0.7143rem;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.slick-slider {
  height: 100%;
}
.slick-slide > div {
  height: 100%;
}
.slick-track {
  flex-flow: row;
  display: flex;
  height: 100%;
}
.slick-list {
  overflow: hidden;
  height: inherit;
}
.slick-list ul {
  display: flex;
}
.main-content__slider-img {
  z-index: 6;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.main-content__slide:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  background-image: linear-gradient(to top, #002fc7, 60%, #ffffff);
  opacity: 0.3;
  z-index: 7;
  border-radius: 0.7143rem;
}
.main-content__slider-row-1 {
  position: absolute;
  font-size: 1.6429rem;
  font-weight: bold;
  letter-spacing: 0.58px;
  left: 2.5rem;
  bottom: 14.6429rem;
  padding: 0;
  z-index: 8;
}
.main-content__slider-row-2 {
  position: absolute;
  font-size: 2.8571rem;
  font-weight: 600;
  line-height: 1.125;
  letter-spacing: 0.135px;
  left: 2.5rem;
  bottom: 10.3571rem;
  z-index: 8;
}
.main-content__slider-managment {
  display: flex;
  margin-top: 48.0714rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.8571rem 0 3.0714rem;
}
.main-content__dot {
  bottom: 2.8571rem;
  left: 2.5rem;
  z-index: 9;
  position: absolute;
}
.main-content__dot li {
  display: inline-block;

  font-size: 0;
  color: transparent;
}
.main-content__dot li.slick-active button {
  background-color: #7ac9ff;
}
.main-content__dot li button {
  border: transparent;
  width: 1.1429rem;
  height: 1.1429rem;
  z-index: 8;
  background-color: #ffffff;
  border-radius: 0.7143rem;
  margin-right: 2.5rem;
  cursor: pointer;
  outline: none;
}
.main-content__slider-btns {
  display: flex;
  justify-content: space-between;
  width: 7.1429rem;
  z-index: 8;
  position: absolute;
  bottom: 3.1429rem;
  right: 2.5rem;
}
</style>
