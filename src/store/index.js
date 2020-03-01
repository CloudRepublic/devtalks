import Vue from "vue";
import Vuex from "vuex";
import episodes from "./modules/episodes";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  modules: { episodes }
});
