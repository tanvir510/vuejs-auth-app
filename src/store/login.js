import axios from 'axios'

export default {
  namespaced: true,

  state: {
    token: window.localStorage.getItem('user_token') || '',
    isSuccess: false,
    isError: false,
    isLogout: false,
    isLogedIn: false,
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
    setSuccess(state, status){
      state.isSuccess = status
    },
    setLogedIn(state, status){
      state.isLogedIn = status
    },
    setError(state, status){
      state.isError = status
    },
  },

  actions: {
    // Login Action
    submitLogin({commit}, payload){
        commit('setSuccess', false)
        commit('setError', false)
        axios.post('https://reqres.in/api/login', payload)
            .then((res)=>{
                const token = res.data.token;
                if(token){
                    window.localStorage.setItem('user_token', token)
                }
                commit('setToken', token)
                commit('setSuccess', true)
            })
            .catch((err)=>{
              console.log(err);
              window.localStorage.removeItem('user_token')
              commit('setError', false)
            })
    },
    // Logout Action
    submitLogout({commit}){
      window.localStorage.removeItem('user_token')
      commit('setToken', '')
      commit('setSuccess', false)
    }
  }
}

