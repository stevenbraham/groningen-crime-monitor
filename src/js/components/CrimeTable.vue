<template>
    <table class="table table-striped crime-table">
        <thead>
        <tr>
            <th>
                Neighbourhood
            </th>
            <th>
                Income
            </th>
            <th v-if="crimeMode == 'car'">
                Number of car thefts
            </th>
            <th v-if="crimeMode == 'bike'">
                Number of bike thefts
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row,index) in crimeStats">
            <td>
                {{row.name}}
            </td>
            <td>
                €{{row.income.toLocaleString("en-us")}}
            </td>
            <td v-if="crimeMode == 'car'">
                {{row.carThefts}}
            </td>
            <td v-if="crimeMode == 'bike'">
                {{row.bikeThefts}}
            </td>
        </tr>
        </tbody>
    </table>
</template>
<script type="text/babel">
    export default {
        store: ['crimeMode', 'crimeStats'],
    }
</script>
