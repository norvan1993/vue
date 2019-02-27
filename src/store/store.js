import Vue from "vue";
import Vuex from "vuex";
import * as test from "@/store/modules/test.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "norvan",
    age: 27
  },
  mutations: {
    increcement(state) {
      state.age++;
    }
  },
  getters: {
    afterFiveYears: state => {
      return state.age + 5;
    }
  },
  actions: {
    increcement: context => {
      context.commit("increcement");
    }
  },
  modules: {
    test
  }
});
