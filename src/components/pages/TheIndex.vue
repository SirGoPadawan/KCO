<template>
  <div>
    <the-head />
    <the-main />
    <the-footer />
  </div>
</template>
<script>
export default {
  name: "app",
  components: {
    "the-head": () => import("../TheHead.vue"),
    "the-main": () => import("../TheMain.vue"),
    "the-footer": () => import("../TheFooter.vue"),
  },
};
</script>
