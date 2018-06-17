<template>
    <table class="table table-striped crime-table">
        <thead>
        <tr>
            <th v-on:click="sortData('name')" :class="[{active:orderBy=='name'},`sort-${orderMode}`]">
                Buurt <i class="fa fa-arrow-up"></i> <i class="fa fa-arrow-down"></i>
            </th>
            <th v-on:click="sortData('income')" :class="[{active:orderBy=='income'},`sort-${orderMode}`]">
                Inkomen <i class="fa fa-arrow-up"></i> <i class="fa fa-arrow-down"></i>
            </th>
            <th v-if="crimeMode == 'car'" v-on:click="sortData('carThefts')" :class="[{active:orderBy=='carThefts'},`sort-${orderMode}`]">
                Aantal autodiefstallen <i class="fa fa-arrow-up"></i> <i class="fa fa-arrow-down"></i>
            </th>
            <th v-if="crimeMode == 'bike'" v-on:click="sortData('bikeThefts')" :class="[{active:orderBy=='bikeThefts'},`sort-${orderMode}`]">
                Aantal Fietsendiefstallen <i class="fa fa-arrow-up"></i> <i class="fa fa-arrow-down"></i>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row,index) in tableStats">
            <td>
                {{row.name}}
            </td>
            <td>
                €{{row.income.toLocaleString("nl-nl", {minimumFractionDigits: 2, maximumFractionDigits: 2})}}
                <small class="red-text" v-if="row.incomeAboveAverage < 0">
                    ( {{(Math.abs(row.incomeAboveAverage)).toLocaleString("nl-nl", {minimumFractionDigits: 2, maximumFractionDigits: 2})}}% onder het gemiddelde)
                </small>
                <small class="green-text" v-else>( {{(row.incomeAboveAverage).toLocaleString("nl-nl", {minimumFractionDigits: 2, maximumFractionDigits: 2})}}% boven het gemiddelde)</small>
            </td>
            <td v-if="crimeMode == 'car'">
                {{row.carThefts}}
                <small class="text-muted">( {{(row.carTheftShare).toLocaleString("nl-nl", {minimumFractionDigits: 2, maximumFractionDigits: 2})}}% van totaal)</small>
            </td>
            <td v-if="crimeMode == 'bike'">
                {{row.bikeThefts}}
                <small class="text-muted">({{(row.bikeTheftShare).toLocaleString("nl-nl", {minimumFractionDigits: 2, maximumFractionDigits: 2})}}% van het totaal)</small>
            </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td>Gemiddelde</td>
            <td>€{{averageStats.income.toLocaleString("nl-nl", {minimumFractionDigits: 2, maximumFractionDigits: 2})}}</td>
            <td>
                {{crimeMode == 'car' ? Math.round(averageStats.carThefts) : Math.round(averageStats.bikeThefts)}}
            </td>
        </tr>
        </tfoot>
    </table>
</template>
<script type="text/babel">
    import _ from "lodash";

    export default {
        store: ['crimeMode', 'crimeStats', 'totalStats', 'averageStats'],
        data: function () {
            return {
                tableStats: [],
                orderBy: 'name',
                orderMode: 'desc'
            };
        },
        mounted: function () {
            this.sortData("name");
        },
        methods: {
            sortData: function (attribute) {
                //create local copy of the crime stats without a reference to make sure the original array stays unmodified
                this.tableStats = this.crimeStats.slice(0);
                this.orderMode = ( this.orderMode == "desc" ? 'asc' : 'desc');

                this.tableStats = _.sortBy(this.tableStats, attribute);
                if (this.orderMode == "desc" && this.orderBy == attribute) {
                    this.tableStats = this.tableStats.reverse();
                }
                this.orderBy = attribute;
            }
        },
    }
</script>
