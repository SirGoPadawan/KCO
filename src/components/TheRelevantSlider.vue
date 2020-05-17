<template>
  <div>
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
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        sliderToScroll: 1,
      },
      sliders: [
        {
          id: 1,
          img: "../static/gerb.png",
          relevantText1: "Минздрав России",
          relevantText2: "Медицинская помощь больным с онкологическими заболеваниями",
          relevantLinkText: "Плакат-памятка",
        },
        {
          id: 2,
          img: "../static/ACS.png",
          relevantText1: "Пройти бесплатно",
          relevantText2: " Анамнестический онкологический скриннинг",
          relevantLinkText: "Плакат-памятка",
        },
        {
          id: 3,
          img: "../static/book.png",
          relevantText1: "Ознакомиться",
          relevantText2:
            "На основании ФЗ'<q>'Об основах охраны здоровья граждан РФ'</q>'",
          relevantLinkText: "Плакат-памятка",
        },
        {
          id: 4,
          img: "../static/gerb.png",
          relevantText1: "Минздрав России",
          relevantText2: "Медицинская помощь больным с онкологическими заболеваниями",
          relevantLinkText: "Плакат-памятка",
        },
        {
          id: 5,
          img: "../static/ACS.png",
          relevantText1: "Пройти бесплатно",
          relevantText2: " Анамнестический онкологический скриннинг",
          relevantLinkText: "Плакат-памятка",
        },
        {
          id: 6,
          img: "../static/book.png",
          relevantText1: "Ознакомиться",
          relevantText2:
            "На основании ФЗ'<q>'Об основах охраны здоровья граждан РФ'</q>'",
          relevantLinkText: "Плакат-памятка",
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
}
.relevant-text {
  text-align: center;
  margin-top: 0;
  margin-bottom: auto;
  padding-bottom: 24px;
}
</style>
