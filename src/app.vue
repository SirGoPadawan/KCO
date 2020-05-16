<template>
  <div>
    <the-head />
    <the-main />
    <the-footer />
  </div>
</template>

<script>
export default {
  components: {
    "v-slider": () => import("./components/VSliderMain.vue"),
    "the-head": () => import("./components/TheHead.vue"),
    "the-main": () => import("./components/TheMain.vue"),
    "the-footer": () => import("./components/TheFooter.vue"),
  },
};
</script>
