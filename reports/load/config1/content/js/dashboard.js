/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 0.0, "KoPercent": 100.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.0, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, "configuration_1"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 160, 160, 100.0, 812.0187500000002, 754, 1107, 806.0, 850.5, 895.95, 1082.5999999999995, 1.4511681903932665, 0.3273631367000435, 0.22249356044115512], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["configuration_1", 160, 160, 100.0, 812.0187500000002, 754, 1107, 806.0, 850.5, 895.95, 1082.5999999999995, 1.4511681903932665, 0.3273631367000435, 0.22249356044115512], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 825 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 846 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 784 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 774 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 836 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 902 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 857 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 899 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 1,067 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 1,107 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 851 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 773 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 779 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 803 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 824 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 814 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 888 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 835 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 763 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 856 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 809 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 901 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 813 milliseconds, but should not have lasted longer than 530 milliseconds.", 7, 4.375, 4.375], "isController": false}, {"data": ["The operation lasted too long: It took 768 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 858 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 900 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 810 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 819 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 845 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 782 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 816 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 797 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 785 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 794 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 829 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 830 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 826 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 833 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 791 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 862 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 823 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 820 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 778 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 822 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 807 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 777 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 839 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 781 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 798 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 843 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 896 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 801 milliseconds, but should not have lasted longer than 530 milliseconds.", 5, 3.125, 3.125], "isController": false}, {"data": ["The operation lasted too long: It took 770 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 755 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 821 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 776 milliseconds, but should not have lasted longer than 530 milliseconds.", 4, 2.5, 2.5], "isController": false}, {"data": ["The operation lasted too long: It took 895 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 800 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 817 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 787 milliseconds, but should not have lasted longer than 530 milliseconds.", 4, 2.5, 2.5], "isController": false}, {"data": ["The operation lasted too long: It took 792 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 827 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 806 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 832 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 811 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 771 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 834 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 789 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 790 milliseconds, but should not have lasted longer than 530 milliseconds.", 4, 2.5, 2.5], "isController": false}, {"data": ["The operation lasted too long: It took 793 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 786 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 924 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 831 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 761 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 808 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 767 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 886 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 805 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 812 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 802 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 799 milliseconds, but should not have lasted longer than 530 milliseconds.", 2, 1.25, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 815 milliseconds, but should not have lasted longer than 530 milliseconds.", 3, 1.875, 1.875], "isController": false}, {"data": ["The operation lasted too long: It took 783 milliseconds, but should not have lasted longer than 530 milliseconds.", 5, 3.125, 3.125], "isController": false}, {"data": ["The operation lasted too long: It took 754 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 780 milliseconds, but should not have lasted longer than 530 milliseconds.", 1, 0.625, 0.625], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 160, 160, "The operation lasted too long: It took 813 milliseconds, but should not have lasted longer than 530 milliseconds.", 7, "The operation lasted too long: It took 801 milliseconds, but should not have lasted longer than 530 milliseconds.", 5, "The operation lasted too long: It took 783 milliseconds, but should not have lasted longer than 530 milliseconds.", 5, "The operation lasted too long: It took 776 milliseconds, but should not have lasted longer than 530 milliseconds.", 4, "The operation lasted too long: It took 787 milliseconds, but should not have lasted longer than 530 milliseconds.", 4], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["configuration_1", 160, 160, "The operation lasted too long: It took 813 milliseconds, but should not have lasted longer than 530 milliseconds.", 7, "The operation lasted too long: It took 801 milliseconds, but should not have lasted longer than 530 milliseconds.", 5, "The operation lasted too long: It took 783 milliseconds, but should not have lasted longer than 530 milliseconds.", 5, "The operation lasted too long: It took 776 milliseconds, but should not have lasted longer than 530 milliseconds.", 4, "The operation lasted too long: It took 787 milliseconds, but should not have lasted longer than 530 milliseconds.", 4], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
