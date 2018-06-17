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
                let incomeData = [];
                let labels = [];
                let colors = [];

                this.crimeStats.forEach((row) => {
                    incomeData.push(row.income);
                    labels.push(row.name);
                    colors.push('#ED1C24');
                });

                this.renderChart(
                    {
                        labels: labels,
                        datasets: [
                            {
                                label: 'aantal diefstallen',
                                data: incomeData,
                                backgroundColor: "#ED1C24",
                            }
                        ]
                    },
                    {
                        responsive: true, maintainAspectRatio: false,
                        legend: {
                            display: false,
                            position: 'bottom'
                        }
                    }
                );
            }
        }
    }
</script>
