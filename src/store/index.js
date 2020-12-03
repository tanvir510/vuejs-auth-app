import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import todos from './todos'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {},
  getters:{},
  mutations: {},
  actions: {},
  modules: {
    login,
    todos
  }
})

