import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicOn: null
  },
  mutations: {
    cambiarDrawer (state) {
      state.vdrawer = !state.vdrawer
    }
  },
  actions: {
    cambiarDrawer (context) {
      context.commit('cambiarDrawer')
    }
  },
  modules: {
  }
})