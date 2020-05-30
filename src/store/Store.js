import Vue from "vue";
import Vuex from "vuex";
import dataActual from "./modules/dataActual";
import dataRelevant from "./modules/dataRelevant";
import dataSliderMain from "./modules/dataSliderMain";
import dataRightBoxMain from "./modules/dataRightBoxMain";
import dataNews from "./modules/dataNews";
import dataNavInfo from "./modules/dataNavInfo";
import dataDigest from "./modules/dataDigest";
import dataPublic from "./modules/dataPublic";
import dataAbout from "./modules/dataAbout";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dataRelevant,
    dataActual,
    dataSliderMain,
    dataRightBoxMain,
    dataNews,
    dataNavInfo,
    dataDigest,
    dataPublic,
    dataAbout,
  },
});
