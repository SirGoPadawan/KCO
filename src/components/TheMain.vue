<template>
  <main class="container">
    <the-main-content class="main-content" />
    <the-news class="news" />
    <the-nav-info class="nav-info" />
    <the-relevant-slider class="relevant" />
    <the-digest-main class="digest-main" />
    <the-public class="public" />
    <the-actual-slider class="links-slider" />
    <the-about class="about" />
  </main>
</template>
<script>
export default {
  components: {
    "the-main-content": () => import("./TheMainContent.vue"),
    "the-news": () => import("./TheNews.vue"),
    "the-nav-info": () => import("./TheNavInfo.vue"),
    "the-relevant-slider": () => import("./TheRelevantSlider.vue"),
    "the-digest-main": () => import("./TheDigest.vue"),
    "the-public": () => import("./ThePublic.vue"),
    "the-actual-slider": () => import("./TheActualSlider.vue"),
    "the-about": () => import("./TheAbout.vue"),
  },
};
</script>
