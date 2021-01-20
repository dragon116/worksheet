import Vue from 'vue'
import Vuex from 'vuex'

import { workSheets } from './mock-data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workSheets: workSheets
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
