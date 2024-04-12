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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 754.0, "minX": 0.0, "maxY": 1107.0, "series": [{"data": [[0.0, 754.0], [0.1, 754.0], [0.2, 754.0], [0.3, 754.0], [0.4, 754.0], [0.5, 754.0], [0.6, 754.0], [0.7, 755.0], [0.8, 755.0], [0.9, 755.0], [1.0, 755.0], [1.1, 755.0], [1.2, 755.0], [1.3, 761.0], [1.4, 761.0], [1.5, 761.0], [1.6, 761.0], [1.7, 761.0], [1.8, 761.0], [1.9, 763.0], [2.0, 763.0], [2.1, 763.0], [2.2, 763.0], [2.3, 763.0], [2.4, 763.0], [2.5, 763.0], [2.6, 763.0], [2.7, 763.0], [2.8, 763.0], [2.9, 763.0], [3.0, 763.0], [3.1, 763.0], [3.2, 763.0], [3.3, 763.0], [3.4, 763.0], [3.5, 763.0], [3.6, 763.0], [3.7, 763.0], [3.8, 767.0], [3.9, 767.0], [4.0, 767.0], [4.1, 767.0], [4.2, 767.0], [4.3, 767.0], [4.4, 768.0], [4.5, 768.0], [4.6, 768.0], [4.7, 768.0], [4.8, 768.0], [4.9, 768.0], [5.0, 770.0], [5.1, 770.0], [5.2, 770.0], [5.3, 770.0], [5.4, 770.0], [5.5, 770.0], [5.6, 770.0], [5.7, 770.0], [5.8, 770.0], [5.9, 770.0], [6.0, 770.0], [6.1, 770.0], [6.2, 770.0], [6.3, 770.0], [6.4, 770.0], [6.5, 770.0], [6.6, 770.0], [6.7, 770.0], [6.8, 770.0], [6.9, 771.0], [7.0, 771.0], [7.1, 771.0], [7.2, 771.0], [7.3, 771.0], [7.4, 771.0], [7.5, 771.0], [7.6, 771.0], [7.7, 771.0], [7.8, 771.0], [7.9, 771.0], [8.0, 771.0], [8.1, 771.0], [8.2, 771.0], [8.3, 771.0], [8.4, 771.0], [8.5, 771.0], [8.6, 771.0], [8.7, 771.0], [8.8, 773.0], [8.9, 773.0], [9.0, 773.0], [9.1, 773.0], [9.2, 773.0], [9.3, 773.0], [9.4, 773.0], [9.5, 773.0], [9.6, 773.0], [9.7, 773.0], [9.8, 773.0], [9.9, 773.0], [10.0, 774.0], [10.1, 774.0], [10.2, 774.0], [10.3, 774.0], [10.4, 774.0], [10.5, 774.0], [10.6, 774.0], [10.7, 776.0], [10.8, 776.0], [10.9, 776.0], [11.0, 776.0], [11.1, 776.0], [11.2, 776.0], [11.3, 776.0], [11.4, 776.0], [11.5, 776.0], [11.6, 776.0], [11.7, 776.0], [11.8, 776.0], [11.9, 776.0], [12.0, 776.0], [12.1, 776.0], [12.2, 776.0], [12.3, 776.0], [12.4, 776.0], [12.5, 776.0], [12.6, 776.0], [12.7, 776.0], [12.8, 776.0], [12.9, 776.0], [13.0, 776.0], [13.1, 776.0], [13.2, 777.0], [13.3, 777.0], [13.4, 777.0], [13.5, 777.0], [13.6, 777.0], [13.7, 777.0], [13.8, 777.0], [13.9, 777.0], [14.0, 777.0], [14.1, 777.0], [14.2, 777.0], [14.3, 777.0], [14.4, 777.0], [14.5, 777.0], [14.6, 777.0], [14.7, 777.0], [14.8, 777.0], [14.9, 777.0], [15.0, 778.0], [15.1, 778.0], [15.2, 778.0], [15.3, 778.0], [15.4, 778.0], [15.5, 778.0], [15.6, 778.0], [15.7, 778.0], [15.8, 778.0], [15.9, 778.0], [16.0, 778.0], [16.1, 778.0], [16.2, 778.0], [16.3, 779.0], [16.4, 779.0], [16.5, 779.0], [16.6, 779.0], [16.7, 779.0], [16.8, 779.0], [16.9, 779.0], [17.0, 779.0], [17.1, 779.0], [17.2, 779.0], [17.3, 779.0], [17.4, 779.0], [17.5, 780.0], [17.6, 780.0], [17.7, 780.0], [17.8, 780.0], [17.9, 780.0], [18.0, 780.0], [18.1, 780.0], [18.2, 781.0], [18.3, 781.0], [18.4, 781.0], [18.5, 781.0], [18.6, 781.0], [18.7, 781.0], [18.8, 782.0], [18.9, 782.0], [19.0, 782.0], [19.1, 782.0], [19.2, 782.0], [19.3, 782.0], [19.4, 783.0], [19.5, 783.0], [19.6, 783.0], [19.7, 783.0], [19.8, 783.0], [19.9, 783.0], [20.0, 783.0], [20.1, 783.0], [20.2, 783.0], [20.3, 783.0], [20.4, 783.0], [20.5, 783.0], [20.6, 783.0], [20.7, 783.0], [20.8, 783.0], [20.9, 783.0], [21.0, 783.0], [21.1, 783.0], [21.2, 783.0], [21.3, 783.0], [21.4, 783.0], [21.5, 783.0], [21.6, 783.0], [21.7, 783.0], [21.8, 783.0], [21.9, 783.0], [22.0, 783.0], [22.1, 783.0], [22.2, 783.0], [22.3, 783.0], [22.4, 783.0], [22.5, 784.0], [22.6, 784.0], [22.7, 784.0], [22.8, 784.0], [22.9, 784.0], [23.0, 784.0], [23.1, 784.0], [23.2, 785.0], [23.3, 785.0], [23.4, 785.0], [23.5, 785.0], [23.6, 785.0], [23.7, 785.0], [23.8, 785.0], [23.9, 785.0], [24.0, 785.0], [24.1, 785.0], [24.2, 785.0], [24.3, 785.0], [24.4, 785.0], [24.5, 785.0], [24.6, 785.0], [24.7, 785.0], [24.8, 785.0], [24.9, 785.0], [25.0, 786.0], [25.1, 786.0], [25.2, 786.0], [25.3, 786.0], [25.4, 786.0], [25.5, 786.0], [25.6, 786.0], [25.7, 787.0], [25.8, 787.0], [25.9, 787.0], [26.0, 787.0], [26.1, 787.0], [26.2, 787.0], [26.3, 787.0], [26.4, 787.0], [26.5, 787.0], [26.6, 787.0], [26.7, 787.0], [26.8, 787.0], [26.9, 787.0], [27.0, 787.0], [27.1, 787.0], [27.2, 787.0], [27.3, 787.0], [27.4, 787.0], [27.5, 787.0], [27.6, 787.0], [27.7, 787.0], [27.8, 787.0], [27.9, 787.0], [28.0, 787.0], [28.1, 787.0], [28.2, 789.0], [28.3, 789.0], [28.4, 789.0], [28.5, 789.0], [28.6, 789.0], [28.7, 789.0], [28.8, 789.0], [28.9, 789.0], [29.0, 789.0], [29.1, 789.0], [29.2, 789.0], [29.3, 789.0], [29.4, 790.0], [29.5, 790.0], [29.6, 790.0], [29.7, 790.0], [29.8, 790.0], [29.9, 790.0], [30.0, 790.0], [30.1, 790.0], [30.2, 790.0], [30.3, 790.0], [30.4, 790.0], [30.5, 790.0], [30.6, 790.0], [30.7, 790.0], [30.8, 790.0], [30.9, 790.0], [31.0, 790.0], [31.1, 790.0], [31.2, 790.0], [31.3, 790.0], [31.4, 790.0], [31.5, 790.0], [31.6, 790.0], [31.7, 790.0], [31.8, 790.0], [31.9, 791.0], [32.0, 791.0], [32.1, 791.0], [32.2, 791.0], [32.3, 791.0], [32.4, 791.0], [32.5, 791.0], [32.6, 791.0], [32.7, 791.0], [32.8, 791.0], [32.9, 791.0], [33.0, 791.0], [33.1, 791.0], [33.2, 791.0], [33.3, 791.0], [33.4, 791.0], [33.5, 791.0], [33.6, 791.0], [33.7, 791.0], [33.8, 792.0], [33.9, 792.0], [34.0, 792.0], [34.1, 792.0], [34.2, 792.0], [34.3, 792.0], [34.4, 793.0], [34.5, 793.0], [34.6, 793.0], [34.7, 793.0], [34.8, 793.0], [34.9, 793.0], [35.0, 793.0], [35.1, 793.0], [35.2, 793.0], [35.3, 793.0], [35.4, 793.0], [35.5, 793.0], [35.6, 793.0], [35.7, 793.0], [35.8, 793.0], [35.9, 793.0], [36.0, 793.0], [36.1, 793.0], [36.2, 793.0], [36.3, 794.0], [36.4, 794.0], [36.5, 794.0], [36.6, 794.0], [36.7, 794.0], [36.8, 794.0], [36.9, 797.0], [37.0, 797.0], [37.1, 797.0], [37.2, 797.0], [37.3, 797.0], [37.4, 797.0], [37.5, 797.0], [37.6, 797.0], [37.7, 797.0], [37.8, 797.0], [37.9, 797.0], [38.0, 797.0], [38.1, 797.0], [38.2, 798.0], [38.3, 798.0], [38.4, 798.0], [38.5, 798.0], [38.6, 798.0], [38.7, 798.0], [38.8, 799.0], [38.9, 799.0], [39.0, 799.0], [39.1, 799.0], [39.2, 799.0], [39.3, 799.0], [39.4, 799.0], [39.5, 799.0], [39.6, 799.0], [39.7, 799.0], [39.8, 799.0], [39.9, 799.0], [40.0, 800.0], [40.1, 800.0], [40.2, 800.0], [40.3, 800.0], [40.4, 800.0], [40.5, 800.0], [40.6, 800.0], [40.7, 800.0], [40.8, 800.0], [40.9, 800.0], [41.0, 800.0], [41.1, 800.0], [41.2, 800.0], [41.3, 800.0], [41.4, 800.0], [41.5, 800.0], [41.6, 800.0], [41.7, 800.0], [41.8, 800.0], [41.9, 801.0], [42.0, 801.0], [42.1, 801.0], [42.2, 801.0], [42.3, 801.0], [42.4, 801.0], [42.5, 801.0], [42.6, 801.0], [42.7, 801.0], [42.8, 801.0], [42.9, 801.0], [43.0, 801.0], [43.1, 801.0], [43.2, 801.0], [43.3, 801.0], [43.4, 801.0], [43.5, 801.0], [43.6, 801.0], [43.7, 801.0], [43.8, 801.0], [43.9, 801.0], [44.0, 801.0], [44.1, 801.0], [44.2, 801.0], [44.3, 801.0], [44.4, 801.0], [44.5, 801.0], [44.6, 801.0], [44.7, 801.0], [44.8, 801.0], [44.9, 801.0], [45.0, 802.0], [45.1, 802.0], [45.2, 802.0], [45.3, 802.0], [45.4, 802.0], [45.5, 802.0], [45.6, 802.0], [45.7, 802.0], [45.8, 802.0], [45.9, 802.0], [46.0, 802.0], [46.1, 802.0], [46.2, 802.0], [46.3, 802.0], [46.4, 802.0], [46.5, 802.0], [46.6, 802.0], [46.7, 802.0], [46.8, 802.0], [46.9, 803.0], [47.0, 803.0], [47.1, 803.0], [47.2, 803.0], [47.3, 803.0], [47.4, 803.0], [47.5, 805.0], [47.6, 805.0], [47.7, 805.0], [47.8, 805.0], [47.9, 805.0], [48.0, 805.0], [48.1, 805.0], [48.2, 805.0], [48.3, 805.0], [48.4, 805.0], [48.5, 805.0], [48.6, 805.0], [48.7, 805.0], [48.8, 805.0], [48.9, 805.0], [49.0, 805.0], [49.1, 805.0], [49.2, 805.0], [49.3, 805.0], [49.4, 806.0], [49.5, 806.0], [49.6, 806.0], [49.7, 806.0], [49.8, 806.0], [49.9, 806.0], [50.0, 806.0], [50.1, 806.0], [50.2, 806.0], [50.3, 806.0], [50.4, 806.0], [50.5, 806.0], [50.6, 806.0], [50.7, 807.0], [50.8, 807.0], [50.9, 807.0], [51.0, 807.0], [51.1, 807.0], [51.2, 807.0], [51.3, 807.0], [51.4, 807.0], [51.5, 807.0], [51.6, 807.0], [51.7, 807.0], [51.8, 807.0], [51.9, 808.0], [52.0, 808.0], [52.1, 808.0], [52.2, 808.0], [52.3, 808.0], [52.4, 808.0], [52.5, 808.0], [52.6, 808.0], [52.7, 808.0], [52.8, 808.0], [52.9, 808.0], [53.0, 808.0], [53.1, 808.0], [53.2, 809.0], [53.3, 809.0], [53.4, 809.0], [53.5, 809.0], [53.6, 809.0], [53.7, 809.0], [53.8, 809.0], [53.9, 809.0], [54.0, 809.0], [54.1, 809.0], [54.2, 809.0], [54.3, 809.0], [54.4, 810.0], [54.5, 810.0], [54.6, 810.0], [54.7, 810.0], [54.8, 810.0], [54.9, 810.0], [55.0, 810.0], [55.1, 810.0], [55.2, 810.0], [55.3, 810.0], [55.4, 810.0], [55.5, 810.0], [55.6, 810.0], [55.7, 811.0], [55.8, 811.0], [55.9, 811.0], [56.0, 811.0], [56.1, 811.0], [56.2, 811.0], [56.3, 811.0], [56.4, 811.0], [56.5, 811.0], [56.6, 811.0], [56.7, 811.0], [56.8, 811.0], [56.9, 812.0], [57.0, 812.0], [57.1, 812.0], [57.2, 812.0], [57.3, 812.0], [57.4, 812.0], [57.5, 812.0], [57.6, 812.0], [57.7, 812.0], [57.8, 812.0], [57.9, 812.0], [58.0, 812.0], [58.1, 812.0], [58.2, 813.0], [58.3, 813.0], [58.4, 813.0], [58.5, 813.0], [58.6, 813.0], [58.7, 813.0], [58.8, 813.0], [58.9, 813.0], [59.0, 813.0], [59.1, 813.0], [59.2, 813.0], [59.3, 813.0], [59.4, 813.0], [59.5, 813.0], [59.6, 813.0], [59.7, 813.0], [59.8, 813.0], [59.9, 813.0], [60.0, 813.0], [60.1, 813.0], [60.2, 813.0], [60.3, 813.0], [60.4, 813.0], [60.5, 813.0], [60.6, 813.0], [60.7, 813.0], [60.8, 813.0], [60.9, 813.0], [61.0, 813.0], [61.1, 813.0], [61.2, 813.0], [61.3, 813.0], [61.4, 813.0], [61.5, 813.0], [61.6, 813.0], [61.7, 813.0], [61.8, 813.0], [61.9, 813.0], [62.0, 813.0], [62.1, 813.0], [62.2, 813.0], [62.3, 813.0], [62.4, 813.0], [62.5, 814.0], [62.6, 814.0], [62.7, 814.0], [62.8, 814.0], [62.9, 814.0], [63.0, 814.0], [63.1, 814.0], [63.2, 814.0], [63.3, 814.0], [63.4, 814.0], [63.5, 814.0], [63.6, 814.0], [63.7, 814.0], [63.8, 815.0], [63.9, 815.0], [64.0, 815.0], [64.1, 815.0], [64.2, 815.0], [64.3, 815.0], [64.4, 815.0], [64.5, 815.0], [64.6, 815.0], [64.7, 815.0], [64.8, 815.0], [64.9, 815.0], [65.0, 815.0], [65.1, 815.0], [65.2, 815.0], [65.3, 815.0], [65.4, 815.0], [65.5, 815.0], [65.6, 815.0], [65.7, 816.0], [65.8, 816.0], [65.9, 816.0], [66.0, 816.0], [66.1, 816.0], [66.2, 816.0], [66.3, 816.0], [66.4, 816.0], [66.5, 816.0], [66.6, 816.0], [66.7, 816.0], [66.8, 816.0], [66.9, 816.0], [67.0, 816.0], [67.1, 816.0], [67.2, 816.0], [67.3, 816.0], [67.4, 816.0], [67.5, 817.0], [67.6, 817.0], [67.7, 817.0], [67.8, 817.0], [67.9, 817.0], [68.0, 817.0], [68.1, 817.0], [68.2, 817.0], [68.3, 817.0], [68.4, 817.0], [68.5, 817.0], [68.6, 817.0], [68.7, 817.0], [68.8, 819.0], [68.9, 819.0], [69.0, 819.0], [69.1, 819.0], [69.2, 819.0], [69.3, 819.0], [69.4, 820.0], [69.5, 820.0], [69.6, 820.0], [69.7, 820.0], [69.8, 820.0], [69.9, 820.0], [70.0, 820.0], [70.1, 820.0], [70.2, 820.0], [70.3, 820.0], [70.4, 820.0], [70.5, 820.0], [70.6, 820.0], [70.7, 821.0], [70.8, 821.0], [70.9, 821.0], [71.0, 821.0], [71.1, 821.0], [71.2, 821.0], [71.3, 821.0], [71.4, 821.0], [71.5, 821.0], [71.6, 821.0], [71.7, 821.0], [71.8, 821.0], [71.9, 821.0], [72.0, 821.0], [72.1, 821.0], [72.2, 821.0], [72.3, 821.0], [72.4, 821.0], [72.5, 822.0], [72.6, 822.0], [72.7, 822.0], [72.8, 822.0], [72.9, 822.0], [73.0, 822.0], [73.1, 822.0], [73.2, 823.0], [73.3, 823.0], [73.4, 823.0], [73.5, 823.0], [73.6, 823.0], [73.7, 823.0], [73.8, 823.0], [73.9, 823.0], [74.0, 823.0], [74.1, 823.0], [74.2, 823.0], [74.3, 823.0], [74.4, 823.0], [74.5, 823.0], [74.6, 823.0], [74.7, 823.0], [74.8, 823.0], [74.9, 823.0], [75.0, 824.0], [75.1, 824.0], [75.2, 824.0], [75.3, 824.0], [75.4, 824.0], [75.5, 824.0], [75.6, 824.0], [75.7, 825.0], [75.8, 825.0], [75.9, 825.0], [76.0, 825.0], [76.1, 825.0], [76.2, 825.0], [76.3, 826.0], [76.4, 826.0], [76.5, 826.0], [76.6, 826.0], [76.7, 826.0], [76.8, 826.0], [76.9, 827.0], [77.0, 827.0], [77.1, 827.0], [77.2, 827.0], [77.3, 827.0], [77.4, 827.0], [77.5, 827.0], [77.6, 827.0], [77.7, 827.0], [77.8, 827.0], [77.9, 827.0], [78.0, 827.0], [78.1, 827.0], [78.2, 827.0], [78.3, 827.0], [78.4, 827.0], [78.5, 827.0], [78.6, 827.0], [78.7, 827.0], [78.8, 829.0], [78.9, 829.0], [79.0, 829.0], [79.1, 829.0], [79.2, 829.0], [79.3, 829.0], [79.4, 829.0], [79.5, 829.0], [79.6, 829.0], [79.7, 829.0], [79.8, 829.0], [79.9, 829.0], [80.0, 830.0], [80.1, 830.0], [80.2, 830.0], [80.3, 830.0], [80.4, 830.0], [80.5, 830.0], [80.6, 830.0], [80.7, 830.0], [80.8, 830.0], [80.9, 830.0], [81.0, 830.0], [81.1, 830.0], [81.2, 830.0], [81.3, 830.0], [81.4, 830.0], [81.5, 830.0], [81.6, 830.0], [81.7, 830.0], [81.8, 830.0], [81.9, 831.0], [82.0, 831.0], [82.1, 831.0], [82.2, 831.0], [82.3, 831.0], [82.4, 831.0], [82.5, 832.0], [82.6, 832.0], [82.7, 832.0], [82.8, 832.0], [82.9, 832.0], [83.0, 832.0], [83.1, 832.0], [83.2, 832.0], [83.3, 832.0], [83.4, 832.0], [83.5, 832.0], [83.6, 832.0], [83.7, 832.0], [83.8, 833.0], [83.9, 833.0], [84.0, 833.0], [84.1, 833.0], [84.2, 833.0], [84.3, 833.0], [84.4, 833.0], [84.5, 833.0], [84.6, 833.0], [84.7, 833.0], [84.8, 833.0], [84.9, 833.0], [85.0, 834.0], [85.1, 834.0], [85.2, 834.0], [85.3, 834.0], [85.4, 834.0], [85.5, 834.0], [85.6, 834.0], [85.7, 834.0], [85.8, 834.0], [85.9, 834.0], [86.0, 834.0], [86.1, 834.0], [86.2, 834.0], [86.3, 835.0], [86.4, 835.0], [86.5, 835.0], [86.6, 835.0], [86.7, 835.0], [86.8, 835.0], [86.9, 836.0], [87.0, 836.0], [87.1, 836.0], [87.2, 836.0], [87.3, 836.0], [87.4, 836.0], [87.5, 839.0], [87.6, 839.0], [87.7, 839.0], [87.8, 839.0], [87.9, 839.0], [88.0, 839.0], [88.1, 839.0], [88.2, 843.0], [88.3, 843.0], [88.4, 843.0], [88.5, 843.0], [88.6, 843.0], [88.7, 843.0], [88.8, 845.0], [88.9, 845.0], [89.0, 845.0], [89.1, 845.0], [89.2, 845.0], [89.3, 845.0], [89.4, 846.0], [89.5, 846.0], [89.6, 846.0], [89.7, 846.0], [89.8, 846.0], [89.9, 846.0], [90.0, 851.0], [90.1, 851.0], [90.2, 851.0], [90.3, 851.0], [90.4, 851.0], [90.5, 851.0], [90.6, 851.0], [90.7, 856.0], [90.8, 856.0], [90.9, 856.0], [91.0, 856.0], [91.1, 856.0], [91.2, 856.0], [91.3, 857.0], [91.4, 857.0], [91.5, 857.0], [91.6, 857.0], [91.7, 857.0], [91.8, 857.0], [91.9, 858.0], [92.0, 858.0], [92.1, 858.0], [92.2, 858.0], [92.3, 858.0], [92.4, 858.0], [92.5, 862.0], [92.6, 862.0], [92.7, 862.0], [92.8, 862.0], [92.9, 862.0], [93.0, 862.0], [93.1, 862.0], [93.2, 886.0], [93.3, 886.0], [93.4, 886.0], [93.5, 886.0], [93.6, 886.0], [93.7, 886.0], [93.8, 888.0], [93.9, 888.0], [94.0, 888.0], [94.1, 888.0], [94.2, 888.0], [94.3, 888.0], [94.4, 895.0], [94.5, 895.0], [94.6, 895.0], [94.7, 895.0], [94.8, 895.0], [94.9, 895.0], [95.0, 896.0], [95.1, 896.0], [95.2, 896.0], [95.3, 896.0], [95.4, 896.0], [95.5, 896.0], [95.6, 896.0], [95.7, 899.0], [95.8, 899.0], [95.9, 899.0], [96.0, 899.0], [96.1, 899.0], [96.2, 899.0], [96.3, 900.0], [96.4, 900.0], [96.5, 900.0], [96.6, 900.0], [96.7, 900.0], [96.8, 900.0], [96.9, 901.0], [97.0, 901.0], [97.1, 901.0], [97.2, 901.0], [97.3, 901.0], [97.4, 901.0], [97.5, 902.0], [97.6, 902.0], [97.7, 902.0], [97.8, 902.0], [97.9, 902.0], [98.0, 902.0], [98.1, 902.0], [98.2, 924.0], [98.3, 924.0], [98.4, 924.0], [98.5, 924.0], [98.6, 924.0], [98.7, 924.0], [98.8, 1067.0], [98.9, 1067.0], [99.0, 1067.0], [99.1, 1067.0], [99.2, 1067.0], [99.3, 1067.0], [99.4, 1107.0], [99.5, 1107.0], [99.6, 1107.0], [99.7, 1107.0], [99.8, 1107.0], [99.9, 1107.0]], "isOverall": false, "label": "configuration_1", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 90.0, "series": [{"data": [[1100.0, 1.0], [700.0, 64.0], [800.0, 90.0], [900.0, 4.0], [1000.0, 1.0]], "isOverall": false, "label": "configuration_1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 160.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 160.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 160.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.5999999999999996, "minX": 1.71292662E12, "maxY": 6.116666666666669, "series": [{"data": [[1.71292668E12, 6.116666666666669], [1.71292662E12, 2.65], [1.71292674E12, 2.5999999999999996]], "isOverall": false, "label": "configuration_1_users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71292674E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 761.0, "minX": 1.0, "maxY": 847.75, "series": [{"data": [[9.0, 781.3571428571429], [10.0, 786.0], [3.0, 834.4], [12.0, 791.8947368421052], [13.0, 830.5], [15.0, 806.4782608695651], [16.0, 807.0], [4.0, 771.0], [1.0, 761.0], [18.0, 818.7037037037039], [19.0, 847.75], [21.0, 833.7142857142857], [22.0, 814.0], [6.0, 784.7], [24.0, 826.4166666666666], [7.0, 777.0]], "isOverall": false, "label": "configuration_1", "isController": false}, {"data": [[15.543749999999989, 812.0187500000002]], "isOverall": false, "label": "configuration_1-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 24.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 52.333333333333336, "minX": 1.71292662E12, "maxY": 462.0, "series": [{"data": [[1.71292668E12, 462.0], [1.71292662E12, 77.0], [1.71292674E12, 77.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71292668E12, 314.0], [1.71292662E12, 52.333333333333336], [1.71292674E12, 52.333333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71292674E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 787.1000000000001, "minX": 1.71292662E12, "maxY": 819.5583333333332, "series": [{"data": [[1.71292668E12, 819.5583333333332], [1.71292662E12, 787.1000000000001], [1.71292674E12, 791.6999999999998]], "isOverall": false, "label": "configuration_1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 787.1000000000001, "minX": 1.71292662E12, "maxY": 819.5583333333332, "series": [{"data": [[1.71292668E12, 819.5583333333332], [1.71292662E12, 787.1000000000001], [1.71292674E12, 791.6999999999998]], "isOverall": false, "label": "configuration_1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.71292662E12, "maxY": 0.19999999999999998, "series": [{"data": [[1.71292668E12, 0.02500000000000001], [1.71292662E12, 0.19999999999999998], [1.71292674E12, 0.0]], "isOverall": false, "label": "configuration_1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 771.0, "minX": 1.0, "maxY": 821.0, "series": [{"data": [[1.0, 771.0], [2.0, 784.5], [4.0, 821.0], [3.0, 812.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 771.0, "minX": 1.0, "maxY": 821.0, "series": [{"data": [[1.0, 771.0], [2.0, 784.5], [4.0, 821.0], [3.0, 812.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.3, "minX": 1.71292662E12, "maxY": 2.0, "series": [{"data": [[1.71292668E12, 2.0], [1.71292662E12, 0.36666666666666664], [1.71292674E12, 0.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71292674E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.71292662E12, "maxY": 2.0, "series": [{"data": [[1.71292668E12, 2.0], [1.71292662E12, 0.3333333333333333], [1.71292674E12, 0.3333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71292674E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.71292662E12, "maxY": 2.0, "series": [{"data": [[1.71292668E12, 2.0], [1.71292662E12, 0.3333333333333333], [1.71292674E12, 0.3333333333333333]], "isOverall": false, "label": "configuration_1-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.71292662E12, "maxY": 2.0, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71292668E12, 2.0], [1.71292662E12, 0.3333333333333333], [1.71292674E12, 0.3333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

