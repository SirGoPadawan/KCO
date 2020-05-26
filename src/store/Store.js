import Vue from "vue";
import Vuex from "vuex";
import dataSlider from "./modules/dataSlider";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dataSlider,
  },
});
