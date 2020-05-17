<template>
  <div class="container" id="head">
    <head-top />
    <head-middle />
    <head-nav />
  </div>
</template>
<script>
export default {
  components: {
    "head-top": () => import("./HeadTop.vue"),
    "head-middle": () => import("./HeadMiddle.vue"),
    "head-nav": () => import("./HeadNav.vue"),
  },
};
</script>
