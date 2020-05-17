"use strict";
import "./css/style.css";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
var TheNews = require("./components/TheNews.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  routers: [
    {
      path: "/the-news",
      component: TheNews,
    },
  ],
});

new Vue({
  el: "#app",
  render: (h) => h(App),
  data: function() {},
  routers,
});
