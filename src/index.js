"use strict";
import "./css/style.css";
import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: "#app",
  render: (h) => h(App),
  data: function() {},
});
let btnsInfo = document.querySelectorAll(".nav-info__btn");
let listLinksInfo = document.querySelectorAll(".nav-info__list");
let idInfoBtn = btnsInfo.IndexOf(
  btnsInfo.forEach(function(btn) {
    btn.onclick = function() {
      btnsInfo.forEach(function(btn) {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
    };
  })
);
