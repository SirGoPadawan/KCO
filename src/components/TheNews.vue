<template>
  <div>
    <the-head />
    <the-news-body />
    <the-footer />
  </div>
</template>

<script>
export default {
  components: {
    "the-head": () => import("./TheHead.vue"),
    "the-news-body": () => import("./TheNewsBody.vue"),
    "the-footer": () => import("./TheFooter.vue"),
  },
};
</script>
