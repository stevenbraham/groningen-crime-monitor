import $ from "jquery";
import "popper.js";
import "bootstrap";
import CSVParser from "papaparse";
import Vue from "vue";

//parse dataset
$.get("../datasets/data.csv", (csvContents) => {
    CSVParser.parse(csvContents, {
        encoding: "UTF-8",
        complete: (results) => {
            setupVue();
        }
    });
});

function setupVue() {
    new Vue({
        el: '#app'
    });
}