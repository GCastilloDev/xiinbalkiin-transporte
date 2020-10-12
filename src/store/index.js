import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    estaciones: []
  },
  mutations: {
    SET_ESTACIONES(state, payload) {
      state.estaciones.push(payload);
    }
  },
  actions: {
    agregarEstacion({ commit }, payload) {
      commit('SET_ESTACIONES', payload);
    }
  },
  modules: {
  }
})
