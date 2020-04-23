import "../../css/style.css";
import "../../img/logo.png";

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

/* function menuOpen(id) {
  let n = document.querySelectorAll(".nav-middle__btn");
  n.forEach(function (btn) {
    btn.onclick = function () {
      n.forEach(function (btn) {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
    };
  });
}
 */
