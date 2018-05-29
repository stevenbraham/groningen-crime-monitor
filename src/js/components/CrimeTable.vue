<template>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Neighbourhood</th>
            <th>
                Income
            </th>
            <th>
                Number of {{crimeMode}} thefts
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row,index) in crimeStats">
            <td>
                {{row.label}}
            </td>
            <td>
                {{row.income}}
            </td>
            <td>
                {{row.crimes}}
            </td>
        </tr>
        </tbody>
    </table>
</template>
<script type="text/babel">
    export default {
        store: ['crimeMode'],
        data() {
            return {
                crimeStats: []
            }
        },
        mounted: function () {
            this.setStats();
        },
        watch: {
            crimeMode: function () {
                this.setStats();
            }
        },
        methods: {
            setStats: function () {
                this.crimeStats = [];
                window.buurtMonitorData.forEach((row) => {

                    let crimeIndex = (this.crimeMode == "car" ? 2 : 3);
                    console.log(crimeIndex);
                    this.crimeStats.push({
                        label: row[0],
                        income: row[1],
                        crimes: row[crimeIndex]
                    });
                });
            }
        }
    }
</script>
