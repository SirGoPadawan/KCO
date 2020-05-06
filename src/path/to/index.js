"use strict";
import "../../css/style.css";
import "./vue.js";
document.getElementById("SocialBtn").onclick = function() {
  updateState("SocialLinks");
};
document.getElementById("mapBtn").onclick = function() {
  updateState("MapMenu");
};
document.getElementById("searchBtn").onclick = function() {
  updateState("searchPlace");
};
function updateState(id) {
  let elem = document.getElementById(id);

  if (elem.classList.contains("active")) {
    elem.classList.remove("active");
  } else elem.classList.add("active");
}
let openList = document.querySelectorAll(".nav-info__btn");
openList.forEach(function(btn) {
  btn.onclick = function() {
    openList.forEach(function(btn) {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  };
});
