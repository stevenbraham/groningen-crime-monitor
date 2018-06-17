<template>
    <div>
        <div class="card mb-3">
            <div class="card-body">
                <h3 class="mb-3">
                    Verhouding tussen het verschil in inkomen en het aantal diefstallen
                </h3>
                <bar-chart></bar-chart>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h3>
                            Aantal {{crimeMode == "car" ? 'auto' : 'fietsen' }}diefstallen per regio
                        </h3>
                        <p class="text-center text-muted">
                            <small>
                                Zwarte vlak is het gebied met de meeste diefstallen. Beweeg de muis over een stuk om de bijbehorende buurt te zien
                            </small>
                        </p>
                        <theft-pie-chart></theft-pie-chart>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h3>
                            Gemiddeld jaarinkomen per regio
                        </h3>
                        <income-bar-chart height=525></income-bar-chart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
    import TheftPieChart from "./TheftPieChart.vue";
    import IncomeBarChart from "./IncomeBarChart.vue";
    import BarChart from "./BarChart.vue";

    export default {
        store: ['crimeMode'],
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {
            TheftPieChart, BarChart, IncomeBarChart
        }
    }
</script>
