import axios from 'axios';

const getDefaultState = () => {
    return {
        user: {
            name: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode:'',
            },
            phone: '',
            website: '',
            company: {
                name: ''
            }
        },
        loading: false
    }
};

export default {

    state: getDefaultState(),
    mutations: {
        updateUser(state, data) {
            state.user = data
        },
        updateLoading(state, loading) {
            state.loading = loading
        },
        resetState (state) {
            Object.assign(state, getDefaultState())
        }
    },
    actions: {
        getUserById(ctx, id) {
            ctx.commit('updateLoading', true)
            axios
                .get('https://jsonplaceholder.typicode.com/users/' + id)
                .then(response => {
                    ctx.commit('updateUser', response.data)
                    ctx.commit('updateLoading', false)
                })
                .catch((error) => console.log(error.message))
        },
        resetState ({commit}) {
            commit('resetState')
        }
    },
    getters: {
        singleUser(state) {
            return state.user
        },
        singleUserStateLoading(state) {
            return state.loading
        }
    }
}
