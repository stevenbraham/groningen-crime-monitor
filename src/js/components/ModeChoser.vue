<template>

    <div class="row mb-3">
        <div class="col-md-6">
            <button :class="`btn btn-block btn-${crimeMode == 'car' ? 'primary':'outline-primary' } btn-lg`" type="button" v-on:click="crimeMode = 'car'">
                <i class="fa fa-car"></i> Autodiefstal Statistieken
            </button>
        </div>
        <div class="col-md-6">
            <button :class="`btn btn-block btn-${crimeMode == 'bike' ? 'primary':'outline-primary' } btn-lg`" type="button" v-on:click="crimeMode = 'bike'">
                <i class="fas fa-bicycle"></i> Fietsdiefstal Statistieken
            </button>
        </div>
    </div>

</template>
<script type="text/babel">
    export default {
        store: ['crimeMode'],
        data() {
            return {
                msg: 'hello vue'
            }
        }
    }
</script>
