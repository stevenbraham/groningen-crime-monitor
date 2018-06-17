<template>
    <div class=" mt-3 mb-3">
        <h1 class="mb-3">
            Hoe verder het inkomen onder het gemiddelde ligt, des te meer {{crimeMode == "car" ? 'auto' : 'fietsen' }}diefstallen vinden er plaats
        </h1>
        <bar-chart></bar-chart>
        <h3>
            Aantal {{crimeMode == "car" ? 'auto' : 'fietsen' }}diefstallen per regio
        </h3>
        <p class="text-center text-muted">
            <small>
                Zwarte vlak is het gebied met de meeste diefstallen
            </small>
        </p>
        <theft-pie-chart></theft-pie-chart>
    </div>
</template>
<script type="text/babel">
    import TheftPieChart from "./TheftPieChart.vue";
    import BarChart from "./BarChart.vue";

    export default {
        store: ['crimeMode'],
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {
            TheftPieChart, BarChart
        }
    }
</script>
