import axios from 'axios'

export default {
  namespaced: true,

  state: {
    isSuccess: false,
    isError: false,
  },

  getters:{
    isSuccess: (state) => state.isSuccess,
    isError: (state) => state.isError,
  },

  mutations: {
    setSuccess(state, status){
      state.isSuccess = status
    },
    setError(state, status){
      state.isError = status
    },
  },

  actions: {
    // Register Action
    submitRegister({commit}, payload){
        commit('setSuccess', false)
        commit('setError', false)
        axios.post('https://reqres.in/api/register', payload)
            .then((res)=>{
              console.log(res);
                commit('setSuccess', true)
            })
            .catch((err)=>{
              commit('setError', false)
            })
    },

  }
}

