"use strict";
import "./css/style.css";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import TheNews from "./components/TheNews.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: App,
    },
    {
      path: "/the-news",
      component: TheNews,
    },
  ],
});

new Vue({
  el: "#app",
  router,
});
