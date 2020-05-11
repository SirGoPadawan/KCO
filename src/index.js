"use strict";
import "./css/style.css";
import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: "#app",
  render: (h) => h(App),
  data: function() {},
});

let openList = document.querySelectorAll(".nav-info__btn");
openList.forEach(function(btn) {
  btn.onclick = function() {
    openList.forEach(function(btn) {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  };
});
