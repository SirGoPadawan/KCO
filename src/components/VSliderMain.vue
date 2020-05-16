<template>
  <div>
    <VueSlickCarousel ref="carousel" v-bind="settings">
      <div v-for="slide in sliders" :key="slide.id">
        <img :src="slide.img" class="main-content__slider-img  item-img" alt="" />
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
  </div>
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
        edgeFriction: 0.35,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      sliders: [
        {
          id: 1,
          img: "../static/layer-main-block.png",
          text1: "Lorem Ipsum Dolor",
          text2: "Sit amet",
        },
        {
          id: 2,
          img: "../static/layer-main-block2.png",
          text1: "Lorem Ipsum Dolor",
          text2: "Sit amet",
        },
        {
          id: 3,
          img: "../static/layer-main-block3.png",
          text1: "Lorem Ipsum Dolor",
          text2: "Sit amet",
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
.slick-slider {
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
  z-index: 7;
  width: auto;
  height: 100%;
}
.main-content__slider:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  background-image: linear-gradient(to top, #002fc7, 60%, #ffffff);
  opacity: 0.3;
  z-index: 8;
  border-radius: 10px;
}
.main-content__slider-row-1 {
  position: absolute;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 0.58px;
  margin: 250px 0 0 45px;
  padding: 0;
  z-index: 8;
}
.main-content__slider-row-2 {
  position: absolute;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.125;
  letter-spacing: 0.135px;
  margin: 300px 0 0 43px;
  z-index: 8;
}
.main-content__slider-managment {
  display: flex;
  margin-top: 673px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px 0 43px;
}
.main-content__dot {
  margin: -80px 0 0 35px;
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
  width: 20px;
  height: 20px;
  z-index: 8;
  background-color: #ffffff;
  border-radius: 10px;
  margin-right: 34px;
  cursor: pointer;
  outline: none;
}
.main-content__slider-btns {
  display: flex;
  justify-content: space-between;
  width: 100px;
  z-index: 8;
  position: absolute;
  margin-top: -80px;
  margin-left: 750px;
}
</style>
