<template>
    <div class="mb-3">
        <h1>
            Wat is de relaite tussen het inkomen van een buurt en de criminaliteit?
        </h1>
        <div class="text-center text-muted mb-3">
            <small>
                <i>
                    Deze visualisatie maak gebruikt van cijfers van de gemeente Groningen uit 2017
                </i>
            </small>
        </div>
        <mode-choser></mode-choser>
        <total-stats></total-stats>
        <charts></charts>
        <crime-table></crime-table>
    </div>
</template>
<script type="text/babel">
    import TotalStats from "./TotalStats.vue";
    import CrimeTable from './CrimeTable.vue';
    import ModeChoser from "./ModeChoser.vue";
    import Charts from "./Charts.vue";

    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {
            ModeChoser, CrimeTable, Charts, TotalStats
        }
    }
</script>
