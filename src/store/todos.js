import axios from 'axios'

export default {
    namespaced: true,

    state: {
        todos: []
    },

    getters:{
        getTodos: (state) => state.todos
    },

    mutations: {
        setTodos(state, data){
            state.todos = data
        },
        addTodos(state, data){
            state.todos = []
            state.todos.push(data)
        },
    },

    actions: {
        // Fetch all todos
        fetchTodos({commit}){
            axios.get('https://reqres.in/api/users')
                .then((res) => {
                    commit('setTodos', res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        // Fetch pagination todos
        fetchPagination({commit}, payload){
            axios.get(`https://reqres.in/api/users?page=${payload}`)
                .then((res) => {
                    commit('setTodos', res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        // Add single todo
        addTodo({commit}, payload){
            commit('addTodos', payload)
        },
    },
}