<script type="text/babel">
    import {Pie} from "vue-chartjs";
    import _ from "lodash";

    export default {
        extends: Pie,
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
                let labels = [];
                let colors = [];

                this.crimeStats.forEach((row) => {
                    crimeData.push(this.crimeMode == "car" ? row.carThefts : row.bikeThefts);
                    labels.push(row.name);
                    colors.push('#ED1C24');
                });

                //set neighbourhood with max value distinct color
                let maxTheft = _.max(crimeData); //get highest value from array
                colors[crimeData.indexOf(maxTheft)] = "#333";
                this.renderChart(
                    {
                        labels: labels,
                        datasets: [
                            {
                                label: 'aantal diefstallen',
                                data: crimeData,
                                backgroundColor: colors,
                                borderColor: 'rgba(256,256,256,1)',
                                borderWidth: 3.5
                            }
                        ]
                    },
                    {
                        responsive: true, maintainAspectRatio: false, legend: {
                        position: 'right'
                    }
                    }
                );
            }
        }
    }
</script>
