import Vue from "vue";

let elem = new Vue.component({});

let changeClass = new Vue({
  el: "#app",
  components: {
    elem: elem,
  },
  data: {
    isActivePlaceHolder: false,
  },
});
