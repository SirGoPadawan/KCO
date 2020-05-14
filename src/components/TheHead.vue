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
    "head-top": () => import("./TheHead/HeadTop.vue"),
    "head-middle": () => import("./TheHead/HeadMiddle.vue"),
    "head-nav": () => import("./TheHead/HeadNav.vue")
  }
};
</script>

