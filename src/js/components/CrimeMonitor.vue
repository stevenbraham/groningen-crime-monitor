<template>
    <div>
        <mode-choser></mode-choser>
        <crime-table></crime-table>
    </div>
</template>
<script type="text/babel">
    import CrimeTable from './CrimeTable.vue';
    import ModeChoser from "./ModeChoser.vue";

    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {
            ModeChoser, CrimeTable
        }
    }
</script>
