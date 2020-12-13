<template>
    <div class="table" style="overflow-x:auto;">
        <table>
            <tr>
                <th>Name</th>
                <td>data</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>data</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>data</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>data</td>
            </tr>
            <tr>
                <th>Website</th>
                <td>data</td>
            </tr>
            <tr>
                <th>Company</th>
                <td>data</td>
            </tr>
        </table>




        <!--            <tr v-for="user in allUsers" :key="user.id">-->
        <!--                <td>{{user.name}}</td>-->
        <!--                <td>{{user.email}}</td>-->
        <!--                <td>{{user.address.street}}, {{user.address.suite}}, {{user.address.city}}, {{user.address.zipcode}}</td>-->
        <!--                <td>{{user.phone}}</td>-->
        <!--                <td>{{user.website}}</td>-->
        <!--                <td>{{user.company.name}}</td>-->
        <!--            </tr>-->
        <!--        </table>-->
        <button class="btn info" @click="goHome">Go Home</button>
    </div>
</template>


<script>
    export default {
        methods: {
            goHome() {
                this.$router.push('/')
            }

        }
    }

</script>


<style scoped>

    .btn {
        border: none;
        color: white;
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        margin-top: 50px;
    }

    .btn:focus {
        outline: none;
    }

    .info {
        background-color: #2196F3;
    }

    .info:hover {
        background: #0b7dda;
    }

    table, th, td {
        border: 1px solid white;
        background-color: rgba(255, 255, 255, 0.4);
    }
    table {
        width: 700px;
        border-collapse: collapse;
        margin: 0 auto;
    }

    th, td {
        padding: 15px;
        text-align: left;
    }

    th {
        width: 25%;
    }

    tr:hover {
        background-color: #96aacf;
    }

</style>