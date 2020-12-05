import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import todos from './todos'
import register from './register'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {},
  getters:{},
  mutations: {},
  actions: {},
  modules: {
    login,
    register,
    todos
  }
})

