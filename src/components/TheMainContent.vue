<template>
  <section>
    <the-slider-main class="main-content__slider" />
    <the-right-box-main class="main-content__right-collumn" />
  </section>
</template>
<script>
export default {
  components: {
    "the-slider-main": () => import("./TheSliderMain.vue"),
    "the-right-box-main": () => import("./TheRightBoxMain.vue"),
  },
};
</script>
