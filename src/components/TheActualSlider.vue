<template>
  <section>
    <header class="relevant__top">
      <button @click="showPrev" class="box-arrow arrow-left smoke"></button>
      <a href="#" class="headline blue">Актуально</a>
      <button @click="showNext" class="box-arrow arrow-right smoke"></button>
    </header>
    <VueSlickCarousel v-bind="settings" ref="carousel">
      <div v-for="slide in sliders" :key="slide.id" class="links-slider__bottom-items">
        <div class="links-slider__bottom-box">
          <div class="links-slider__box-img">
            <div class="links-slider__circle">
              <img :src="slide.img" alt class />
            </div>
            <div class="links-slider__box-text">
              <a href="#" class="item-text_semibold">{{ slide.linksSliderText }}</a>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ sliders: (state) => state.dataActual.sliders }),
  },
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        sliderToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
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
<style>
.links-slider__bottom-items {
  display: flex !important;
  justify-content: space-between;
}
.links-slider__bottom-box {
  display: flex;
  flex-direction: column;
}
.links-slider__box-img {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0px 30px 0;
  background-color: #e8f5ff;
  z-index: 12;
  border-radius: 10px;
}
.links-slider__circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 135px;
  border-radius: 100px;
  background: #ffffff;
  z-index: 0;
}
.links-slider__box-text {
  padding: 0 14px;
}
@media screen and (max-width: 1210px) {
  .item-text_semibold {
    font-size: 16px;
  }
}
@media screen and (max-width: 1084px) {
  .item-text_semibold {
    font-size: 14px;
  }
}
@media screen and (max-width: 661px) {
  .item-text_semibold {
    font-size: 12px;
  }
}
@media screen and (min-width: 480px) and (max-width: 600px) {
  .item-text_semibold {
    font-size: 14px;
  }
}
@media screen and (max-width: 480px) {
  .headline {
    display: none;
  }
}
</style>
