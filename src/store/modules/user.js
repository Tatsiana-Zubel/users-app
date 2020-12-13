import axios from 'axios';

const getDefaultState = () => {
    return {
       user: {}
    }
};

export default {

    state: getDefaultState(),
    mutations: {
        updateUser(state, data) {
            state.user = data
        },
        resetState (state) {
            Object.assign(state, getDefaultState())
        }
    },
    actions: {
        getUserById(ctx, id) {
            axios
                .get('https://jsonplaceholder.typicode.com/users/' + id)
                .then(response => {
                    ctx.commit('updateUser', response.data)
                })
                .catch((error) => console.log(error.message))
        },
        resetState ({ commit }) {
            commit('resetState')
        }
    },
    getters: {
        singleUser(state) {
            return state.user
        }
    },

}
