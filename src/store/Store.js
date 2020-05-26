import Vue from "vue";
import Vuex from "vuex";
import DataRelevantSlider from "./modules/DataRelevantSlider";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    DataRelevantSlider,
  },
});
