import Vue from "vue";
import Vuex from "vuex";
import dataActual from "./modules/dataActual";
import dataRelevant from "./modules/dataRelevant";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dataRelevant,
    dataActual,
  },
});
