import VueRouter from 'vue-router'

import AllUsers from '../components/AllUsers'
import SingleUser from '../components/SingleUser'


export default new VueRouter( {
    mode: 'history',
    routes: [
        { path: '/', component: AllUsers },
        { path: '/single-user', component: SingleUser},
    ]
})