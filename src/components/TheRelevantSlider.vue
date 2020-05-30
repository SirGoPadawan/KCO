<template>
  <section>
    <header class="relevant__top">
      <button @click="showPrev" class="box-arrow arrow-left smoke"></button>
      <a href="#" class="headline blue">Актуально</a>
      <button @click="showNext" class="box-arrow arrow-right smoke"></button>
    </header>
    <VueSlickCarousel v-bind="settings" ref="carousel">
      <div v-for="slide in sliders" :key="slide.id" class="relevant__bottom-box">
        <img :src="slide.img" class="" alt="" />
        <h3 class="item-text_extrabold">{{ slide.relevantText1 }}</h3>
        <p class="relevant-text item-text_semibold">
          {{ slide.relevantText2 }}
        </p>
        <a href="#" class="link_big item-text_extrabold">{{ slide.relevantLinkText }}</a>
      </div>
    </VueSlickCarousel>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ sliders: (state) => state.dataRelevant.sliders }),
  },
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        sliderToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 700,
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
.slick-slide > div {
  margin: 0 4px;
}
.relevant__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
}
.relevant__bottom-box {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(232, 245, 255);
  text-align: center;
  padding: 50px 15px;
  outline: none;
  height: 100%;
}
.relevant-text {
  text-align: center;
  margin-top: 0;
  margin-bottom: auto;
  padding-bottom: 24px;
}
@media screen and (max-width: 480px) {
  .headline {
    display: none;
  }
}
</style>
