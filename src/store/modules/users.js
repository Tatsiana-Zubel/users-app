import axios from 'axios';

export default {
    state: {
        users: [],
    },
    mutations: {
        updateUsers(state, data) {
            state.users = data
        }
    },
    actions: {
        getUsers({commit}) {
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    commit('updateUsers', response.data)
                })
                .catch((error) => console.log(error.message))
        }
    },
    getters: {
        allUsers(state) {
            return state.users
        },
    }
}