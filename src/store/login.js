import axios from 'axios'

export default {
  namespaced: true,

  state: {
    token: localStorage.getItem('user_token') || '',
    isLogedIn: false,
    isSuccess: false,
    isError: false,
    isLogout: false
  },

  getters:{
    getToken: (state) => state.token,
    isLogedIn: (state) => !!state.token,
    isLogout: (state) => state.isLogout,
    isSuccess: (state) => state.isSuccess,
    isError: (state) => state.isError,
  },

  mutations: {
    setToken(state, status){
        state.token = status
    },
    setLogedIn(state, status){
      state.isLogedIn = status
    },
    setSuccess(state, status){
      state.isSuccess = status
    },
    setLogout(state, status){
      state.isLogout = status
    },
    setError(state, status){
      state.isError = status
    },
  },

  actions: {
    submitLogin({commit}, payload){
        commit('setLogedIn', false)
        commit('setSuccess', false)
        commit('setError', false)
        axios.post('https://reqres.in/api/login', payload)
            .then((res)=>{
                const token = res.data.token;
                if(token){
                    localStorage.setItem('user_token', token)
                }
                commit('setToken', token)
                commit('setLogedIn', true)
                commit('setSuccess', true)
            })
            .catch((err)=>{
                commit('setLogedIn', false)
                commit('setError', false)
            })
    },
    submitLogout({commit}){
      window.localStorage.removeItem('user_token')
      commit('setLogout', true)
    }
  }
}

