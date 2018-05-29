import $ from "jquery";
import "popper.js";
import "bootstrap";
import CSVParser from "papaparse";
import Vue from "vue";
import VueStash from "vue-stash";

import CrimeMonitor from "./components/CrimeMonitor.vue";
import ModeChoser from "./components/ModeChoser.vue";

Vue.use(VueStash);

window.buurtMonitorData = {};

//parse dataset
$.get("../datasets/data.csv", (csvContents) => {
    CSVParser.parse(csvContents, {
        encoding: "UTF-8",
        complete: (results) => {
            results.data.shift();
            window.buurtMonitorData = results.data;
            setupVue();
        }
    });
});

function setupVue() {
    new Vue({
        el: '#app',
        data: {
            store: {
                crimeMode: 'car'
            }
        },
        components: {CrimeMonitor, ModeChoser}
    });
}