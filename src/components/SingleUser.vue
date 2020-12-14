<template>
    <div>
        <Spinner v-if="singleUserStateLoading"></Spinner>
        <div v-if="!singleUserStateLoading" class="table-container" style="overflow-x:auto;">
            <span class="user-name">{{singleUser.name}}</span>
            <table class="user-table">
                <tr>
                    <th>Name</th>
                    <td>{{singleUser.name}}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{singleUser.email}}</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>{{singleUser.address.street}}, {{singleUser.address.suite}}, {{singleUser.address.city}},
                        {{singleUser.address.zipcode}}
                    </td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{{singleUser.phone}}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{{singleUser.website}}</td>
                </tr>
                <tr>
                    <th>Company</th>
                    <td>{{singleUser.company.name}}</td>
                </tr>
            </table>
            <button class="btn" @click="goBack">Go Back</button>
        </div>
    </div>
</template>


<script>
    import {mapActions, mapGetters} from 'vuex'
    import Spinner from './spinner/Spinner.vue'

    export default {
        components: {
            Spinner
        },
        computed: {
            ...mapGetters(['singleUser', 'singleUserStateLoading']),
        },
        methods: {
            ...mapActions(['getUserById', 'resetState']),
            goBack() {
                this.$router.push('/')
            },
        },
        beforeMount() {
            this.resetState()
        },
        mounted() {
            let id = this.$route.params.id
            this.getUserById(id)
        }
    }
</script>


<style scoped>
    .table-container {
        margin-bottom: 60px;
    }

    .user-name {
        font-size: 24px;
    }

    .user-table {
        margin-top: 30px;
    }

    .btn {
        color: white;
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        margin-top: 30px;
        border: 1px solid white;
        background-color: #2196F3;
    }

    .btn:focus {
        outline: none;
    }

    table, th, td {
        border: 1px solid white;
        background-color: rgba(255, 255, 255, 0.4);
    }

    table {
        width: 60%;
        border-collapse: collapse;
        margin: 0 auto;
        cursor: pointer;
    }

    th, td {
        padding: 15px;
        text-align: left;
    }

    th {
        width: 25%;
        background-color: #96aacf;
    }
</style>