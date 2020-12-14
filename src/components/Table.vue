<template>
    <div>
        <Spinner v-if="allUsersStateLoading"></Spinner>
        <div v-if="!allUsersStateLoading" class="table-container" style="overflow-x:auto;">
            <table>
                <tr class="header">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Company</th>
                </tr>
                <tr v-for="user in allUsers" :key="user.id" @click="handleClick(user.id)">
                    <td class="bold-column">{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.company.name}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import Spinner from './spinner/Spinner.vue'

    export default {
        components: {
            Spinner
        },
        computed: mapGetters(['allUsers', 'allUsersStateLoading']),
        methods: {
            ...mapActions(['getUsers']),
            handleClick(id) {
                this.$router.push('/user/' + id)
            }
        },
        mounted() {
            this.getUsers()
        }
    }
</script>


<style scoped>
    .table-container {
        margin-bottom: 60px;
    }

    table, th, td {
        border: 1px solid white;
        background-color: rgba(255, 255, 255, 0.4);
    }

    table {
        width: 90%;
        margin: 0 auto;
        border-collapse: collapse;
        cursor: pointer;
    }

    th, td {
        padding: 15px;
        text-align: left;
    }

    tr:hover {
        background-color: #96aacf;
    }

    .header {
        background-color: #96aacf;
    }

    .bold-column {
        font-weight: 500;
    }
</style>