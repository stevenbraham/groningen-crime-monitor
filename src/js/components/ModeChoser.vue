<template>
    <div>
        <div class="form-group">
            <label for="mode-choser" class="control-label">Select stat</label>
            <select v-model="crimeMode" class="form-control" id="mode-choser">
                <option value="bike">Bike</option>
                <option value="car">Car</option>
            </select>
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
