import TheNews from "./components/pages/TheNews.vue";
import TheIndex from "./components/pages/TheIndex.vue";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: TheIndex,
    },
    {
      path: "/the-news",
      component: TheNews,
    },
  ],
});

export default router;
