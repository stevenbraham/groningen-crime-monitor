<template>
    <div>
        <mode-choser></mode-choser>
        <pie-charts></pie-charts>
        <crime-table></crime-table>
    </div>
</template>
<script type="text/babel">
    import CrimeTable from './CrimeTable.vue';
    import ModeChoser from "./ModeChoser.vue";
    import PieCharts from "./PieCharts.vue";

    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {
            ModeChoser, CrimeTable, PieCharts
        }
    }
</script>
