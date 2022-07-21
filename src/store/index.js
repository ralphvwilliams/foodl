import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    random: {},
    byIngredient: [],
    byId: {},
  },
  getters: {
    getRandom: (state) => state.random,
    getByIngredient: (state) => state.byIngredient,
    getById: (state) => state.byId,
  },
  mutations: {
    SET_RANDOM_FOOD(state, payload) {
      state.random = payload;
    },
    SET_BY_INGREDIENT(state, payload) {
      state.byIngredient = payload;
    },
    SET_BY_ID(state, payload) {
      state.byId = payload;
    },
  },
  actions: {
    async fetchRandom({ commit }) {
      const res = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      );
      commit('SET_RANDOM_FOOD', res.data.meals[0]);
    },

    async fetchByIngredient({ commit }, ingredient) {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      commit('SET_BY_INGREDIENT', res.data.meals);
    },

    async fetchById({ commit }, id) {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      commit('SET_BY_ID', res.data.meals[0]);
    },
  },
  modules: {},
});
