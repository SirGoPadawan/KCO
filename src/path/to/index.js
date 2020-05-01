import "../../css/style.css";

document.getElementById("headerSocialBtn").onclick = function () {
  updateState("headerSocialLinks");
};
document.getElementById("headerMapBtn").onclick = function () {
  updateState("headerMapMenu");
};
document.getElementById("headerSearchBtn").onclick = function () {
  updateState("headerSearchPlace");
};
function updateState(id) {
  let elem = document.getElementById(id);

  if (elem.classList.contains("active")) {
    elem.classList.remove("active");
  } else elem.classList.add("active");
}
let openList = document.querySelectorAll(".nav-info__btn", ".nav-info__list");
openList.forEach(function (btn) {
  btn.onclick = function () {
    openList.forEach(function (btn) {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  };
});
