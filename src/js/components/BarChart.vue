<script type="text/babel">
    import {Bar} from "vue-chartjs";
    import _ from "lodash";

    export default {
        extends: Bar,
        store: ['crimeStats', 'crimeMode'],
        mounted: function () {
            this.drawChart();
        },
        watch: {
            crimeMode: function () {
                this.$data._chart.destroy();
                this.drawChart();
            }
        },
        methods: {
            drawChart: function () {

                let crimeData = [];
                let incomeData = [];
                let labels = [];

                //reverse sort data by income levels
                _.sortBy(this.crimeStats, "incomeAboveAverage", 'desc').reverse().forEach((row) => {
                    crimeData.push(this.crimeMode == "car" ? row.carTheftShare : row.bikeTheftShare);
                    incomeData.push(row.incomeAboveAverage);
                    labels.push(row.name);
                });
                console.log(crimeData);

                this.renderChart(
                    {
                        labels: labels,
                        datasets: [
                            {
                                label: '% verschil gemiddelde inkomen',
                                data: incomeData,
                                backgroundColor: "#ED1C24",
                            },
                            {
                                label: '% van het totale aantal diefstallen',
                                data: crimeData,
                                backgroundColor: "#333",
                            }
                        ],

                    },
                    {

                        responsive: true, maintainAspectRatio: false, legend: {
                        position: 'bottom'
                    }
                    }
                );
            }
        }
    }
</script>
