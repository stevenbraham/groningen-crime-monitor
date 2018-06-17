<template>
    <div class=" mt-3 mb-3">
        <h2>
            In 2017 werden er in Groningen <span class="red-text">{{crimeMode == "car" ? totalStats.carThefts : totalStats.bikeThefts }} {{crimeMode == "car" ? "auto's" : 'fietsen' }}</span> gestolen!
        </h2>
        <h2 class="mb-3">
           <span class="red-text">
               Hoe verder
           </span> het inkomen onder het gemiddelde ligt, <span class="red-text">des te groter</span> is de kans dat er meer  {{crimeMode == "car" ? 'auto' : 'fietsen' }}diefstallen plaatsvinden
        </h2>
    </div>
</template>
<script type="text/babel">
    export default {
        store: ['crimeMode', 'totalStats'],
        data() {
            return {
                msg: 'hello vue'
            }
        }
    }
</script>
