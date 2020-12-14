import axios from 'axios';

export default {
    state: {
        users: [],
        loading: false
    },
    mutations: {
        updateUsers(state, data) {
            state.users = data
        },
        updateLoading(state, loading) {
            state.loading = loading
        },
    },
    actions: {
        getUsers({commit}) {
            commit('updateLoading', true)
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    commit('updateUsers', response.data)
                    commit('updateLoading', false)
                })
                .catch((error) => console.log(error.message))
        }
    },
    getters: {
        allUsers(state) {
            return state.users
        },
        allUsersStateLoading(state) {
            return state.loading
        }
    }
}