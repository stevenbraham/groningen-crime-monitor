import $ from "jquery";
import _ from "lodash";
import "popper.js";
import "bootstrap";
import CSVParser from "papaparse";
import Vue from "vue";
import VueStash from "vue-stash";

import CrimeMonitor from "./components/CrimeMonitor.vue";

Vue.use(VueStash);

//parse dataset
$.get("../datasets/data.csv", (csvContents) => {
    CSVParser.parse(csvContents, {
        encoding: "UTF-8",
        complete: (results) => {
            //remove first row, because it contains the headers
            results.data.shift();
            //convert data to better format
            let crimeStats = [];
            results.data.forEach((row) => {
                if (row.length >= 4) {
                    //income in the csv is local formatted an in 1000s
                    let income = parseInt(row[1].replace(",", "")) * 100;
                    if (income >= 0) {
                        //only neighbourhood with complete data are used
                        crimeStats.push(
                            {
                                name: row[0],
                                income: income,
                                carThefts: parseInt(row[2]),
                                bikeThefts: parseInt(row[3]),
                            }
                        );
                    }
                }
            });
            setupVue(crimeStats);
        }
    });
});

function setupVue(crimeStats) {

    //_ is from Lodash, a javascript utility function library
    let totalStats = {
        income: _.sumBy(crimeStats, 'income'),
        carThefts: _.sumBy(crimeStats, 'carThefts'),
        bikeThefts: _.sumBy(crimeStats, 'bikeThefts'),
    };

    let averageStats = {
        income: totalStats.income / crimeStats.length,
        carThefts: totalStats.carThefts / crimeStats.length,
        bikeThefts: totalStats.bikeThefts / crimeStats.length
    };

    for (let index = 0; index < crimeStats.length; index++) {
        //add previously unknown total data back into the array so it doesnt have to be calculated over and over again
        crimeStats[index].incomeShare = crimeStats[index].income / totalStats.income * 100;
        crimeStats[index].carTheftShare = crimeStats[index].carThefts / totalStats.carThefts * 100;
        crimeStats[index].bikeTheftShare = crimeStats[index].bikeThefts / totalStats.bikeThefts * 100;
    }

    new Vue({
        el: '#app',
        data: {
            store: {
                crimeMode: 'car',
                crimeStats: crimeStats,
                totalStats: totalStats,
                averageStats: averageStats
            }
        },
        components: {CrimeMonitor}
    });
}