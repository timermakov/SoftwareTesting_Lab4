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
        data: {"result": {"minY": 549.0, "minX": 0.0, "maxY": 947.0, "series": [{"data": [[0.0, 549.0], [0.1, 549.0], [0.2, 549.0], [0.3, 549.0], [0.4, 549.0], [0.5, 549.0], [0.6, 549.0], [0.7, 555.0], [0.8, 555.0], [0.9, 555.0], [1.0, 555.0], [1.1, 555.0], [1.2, 555.0], [1.3, 557.0], [1.4, 557.0], [1.5, 557.0], [1.6, 557.0], [1.7, 557.0], [1.8, 557.0], [1.9, 561.0], [2.0, 561.0], [2.1, 561.0], [2.2, 561.0], [2.3, 561.0], [2.4, 561.0], [2.5, 561.0], [2.6, 561.0], [2.7, 561.0], [2.8, 561.0], [2.9, 561.0], [3.0, 561.0], [3.1, 561.0], [3.2, 562.0], [3.3, 562.0], [3.4, 562.0], [3.5, 562.0], [3.6, 562.0], [3.7, 562.0], [3.8, 562.0], [3.9, 562.0], [4.0, 562.0], [4.1, 562.0], [4.2, 562.0], [4.3, 562.0], [4.4, 562.0], [4.5, 562.0], [4.6, 562.0], [4.7, 562.0], [4.8, 562.0], [4.9, 562.0], [5.0, 564.0], [5.1, 564.0], [5.2, 564.0], [5.3, 564.0], [5.4, 564.0], [5.5, 564.0], [5.6, 564.0], [5.7, 567.0], [5.8, 567.0], [5.9, 567.0], [6.0, 567.0], [6.1, 567.0], [6.2, 567.0], [6.3, 569.0], [6.4, 569.0], [6.5, 569.0], [6.6, 569.0], [6.7, 569.0], [6.8, 569.0], [6.9, 569.0], [7.0, 569.0], [7.1, 569.0], [7.2, 569.0], [7.3, 569.0], [7.4, 569.0], [7.5, 569.0], [7.6, 569.0], [7.7, 569.0], [7.8, 569.0], [7.9, 569.0], [8.0, 569.0], [8.1, 569.0], [8.2, 570.0], [8.3, 570.0], [8.4, 570.0], [8.5, 570.0], [8.6, 570.0], [8.7, 570.0], [8.8, 570.0], [8.9, 570.0], [9.0, 570.0], [9.1, 570.0], [9.2, 570.0], [9.3, 570.0], [9.4, 570.0], [9.5, 570.0], [9.6, 570.0], [9.7, 570.0], [9.8, 570.0], [9.9, 570.0], [10.0, 571.0], [10.1, 571.0], [10.2, 571.0], [10.3, 571.0], [10.4, 571.0], [10.5, 571.0], [10.6, 571.0], [10.7, 572.0], [10.8, 572.0], [10.9, 572.0], [11.0, 572.0], [11.1, 572.0], [11.2, 572.0], [11.3, 572.0], [11.4, 572.0], [11.5, 572.0], [11.6, 572.0], [11.7, 572.0], [11.8, 572.0], [11.9, 572.0], [12.0, 572.0], [12.1, 572.0], [12.2, 572.0], [12.3, 572.0], [12.4, 572.0], [12.5, 572.0], [12.6, 572.0], [12.7, 572.0], [12.8, 572.0], [12.9, 572.0], [13.0, 572.0], [13.1, 572.0], [13.2, 573.0], [13.3, 573.0], [13.4, 573.0], [13.5, 573.0], [13.6, 573.0], [13.7, 573.0], [13.8, 574.0], [13.9, 574.0], [14.0, 574.0], [14.1, 574.0], [14.2, 574.0], [14.3, 574.0], [14.4, 576.0], [14.5, 576.0], [14.6, 576.0], [14.7, 576.0], [14.8, 576.0], [14.9, 576.0], [15.0, 576.0], [15.1, 576.0], [15.2, 576.0], [15.3, 576.0], [15.4, 576.0], [15.5, 576.0], [15.6, 576.0], [15.7, 578.0], [15.8, 578.0], [15.9, 578.0], [16.0, 578.0], [16.1, 578.0], [16.2, 578.0], [16.3, 578.0], [16.4, 578.0], [16.5, 578.0], [16.6, 578.0], [16.7, 578.0], [16.8, 578.0], [16.9, 578.0], [17.0, 578.0], [17.1, 578.0], [17.2, 578.0], [17.3, 578.0], [17.4, 578.0], [17.5, 578.0], [17.6, 578.0], [17.7, 578.0], [17.8, 578.0], [17.9, 578.0], [18.0, 578.0], [18.1, 578.0], [18.2, 578.0], [18.3, 578.0], [18.4, 578.0], [18.5, 578.0], [18.6, 578.0], [18.7, 578.0], [18.8, 579.0], [18.9, 579.0], [19.0, 579.0], [19.1, 579.0], [19.2, 579.0], [19.3, 579.0], [19.4, 581.0], [19.5, 581.0], [19.6, 581.0], [19.7, 581.0], [19.8, 581.0], [19.9, 581.0], [20.0, 581.0], [20.1, 581.0], [20.2, 581.0], [20.3, 581.0], [20.4, 581.0], [20.5, 581.0], [20.6, 581.0], [20.7, 582.0], [20.8, 582.0], [20.9, 582.0], [21.0, 582.0], [21.1, 582.0], [21.2, 582.0], [21.3, 582.0], [21.4, 582.0], [21.5, 582.0], [21.6, 582.0], [21.7, 582.0], [21.8, 582.0], [21.9, 582.0], [22.0, 582.0], [22.1, 582.0], [22.2, 582.0], [22.3, 582.0], [22.4, 582.0], [22.5, 583.0], [22.6, 583.0], [22.7, 583.0], [22.8, 583.0], [22.9, 583.0], [23.0, 583.0], [23.1, 583.0], [23.2, 583.0], [23.3, 583.0], [23.4, 583.0], [23.5, 583.0], [23.6, 583.0], [23.7, 583.0], [23.8, 584.0], [23.9, 584.0], [24.0, 584.0], [24.1, 584.0], [24.2, 584.0], [24.3, 584.0], [24.4, 585.0], [24.5, 585.0], [24.6, 585.0], [24.7, 585.0], [24.8, 585.0], [24.9, 585.0], [25.0, 585.0], [25.1, 585.0], [25.2, 585.0], [25.3, 585.0], [25.4, 585.0], [25.5, 585.0], [25.6, 585.0], [25.7, 585.0], [25.8, 585.0], [25.9, 585.0], [26.0, 585.0], [26.1, 585.0], [26.2, 585.0], [26.3, 585.0], [26.4, 585.0], [26.5, 585.0], [26.6, 585.0], [26.7, 585.0], [26.8, 585.0], [26.9, 586.0], [27.0, 586.0], [27.1, 586.0], [27.2, 586.0], [27.3, 586.0], [27.4, 586.0], [27.5, 586.0], [27.6, 586.0], [27.7, 586.0], [27.8, 586.0], [27.9, 586.0], [28.0, 586.0], [28.1, 586.0], [28.2, 587.0], [28.3, 587.0], [28.4, 587.0], [28.5, 587.0], [28.6, 587.0], [28.7, 587.0], [28.8, 587.0], [28.9, 587.0], [29.0, 587.0], [29.1, 587.0], [29.2, 587.0], [29.3, 587.0], [29.4, 588.0], [29.5, 588.0], [29.6, 588.0], [29.7, 588.0], [29.8, 588.0], [29.9, 588.0], [30.0, 588.0], [30.1, 588.0], [30.2, 588.0], [30.3, 588.0], [30.4, 588.0], [30.5, 588.0], [30.6, 588.0], [30.7, 588.0], [30.8, 588.0], [30.9, 588.0], [31.0, 588.0], [31.1, 588.0], [31.2, 588.0], [31.3, 588.0], [31.4, 588.0], [31.5, 588.0], [31.6, 588.0], [31.7, 588.0], [31.8, 588.0], [31.9, 589.0], [32.0, 589.0], [32.1, 589.0], [32.2, 589.0], [32.3, 589.0], [32.4, 589.0], [32.5, 590.0], [32.6, 590.0], [32.7, 590.0], [32.8, 590.0], [32.9, 590.0], [33.0, 590.0], [33.1, 590.0], [33.2, 591.0], [33.3, 591.0], [33.4, 591.0], [33.5, 591.0], [33.6, 591.0], [33.7, 591.0], [33.8, 591.0], [33.9, 591.0], [34.0, 591.0], [34.1, 591.0], [34.2, 591.0], [34.3, 591.0], [34.4, 591.0], [34.5, 591.0], [34.6, 591.0], [34.7, 591.0], [34.8, 591.0], [34.9, 591.0], [35.0, 592.0], [35.1, 592.0], [35.2, 592.0], [35.3, 592.0], [35.4, 592.0], [35.5, 592.0], [35.6, 592.0], [35.7, 592.0], [35.8, 592.0], [35.9, 592.0], [36.0, 592.0], [36.1, 592.0], [36.2, 592.0], [36.3, 592.0], [36.4, 592.0], [36.5, 592.0], [36.6, 592.0], [36.7, 592.0], [36.8, 592.0], [36.9, 594.0], [37.0, 594.0], [37.1, 594.0], [37.2, 594.0], [37.3, 594.0], [37.4, 594.0], [37.5, 595.0], [37.6, 595.0], [37.7, 595.0], [37.8, 595.0], [37.9, 595.0], [38.0, 595.0], [38.1, 595.0], [38.2, 595.0], [38.3, 595.0], [38.4, 595.0], [38.5, 595.0], [38.6, 595.0], [38.7, 595.0], [38.8, 596.0], [38.9, 596.0], [39.0, 596.0], [39.1, 596.0], [39.2, 596.0], [39.3, 596.0], [39.4, 597.0], [39.5, 597.0], [39.6, 597.0], [39.7, 597.0], [39.8, 597.0], [39.9, 597.0], [40.0, 597.0], [40.1, 597.0], [40.2, 597.0], [40.3, 597.0], [40.4, 597.0], [40.5, 597.0], [40.6, 597.0], [40.7, 598.0], [40.8, 598.0], [40.9, 598.0], [41.0, 598.0], [41.1, 598.0], [41.2, 598.0], [41.3, 599.0], [41.4, 599.0], [41.5, 599.0], [41.6, 599.0], [41.7, 599.0], [41.8, 599.0], [41.9, 600.0], [42.0, 600.0], [42.1, 600.0], [42.2, 600.0], [42.3, 600.0], [42.4, 600.0], [42.5, 600.0], [42.6, 600.0], [42.7, 600.0], [42.8, 600.0], [42.9, 600.0], [43.0, 600.0], [43.1, 600.0], [43.2, 601.0], [43.3, 601.0], [43.4, 601.0], [43.5, 601.0], [43.6, 601.0], [43.7, 601.0], [43.8, 601.0], [43.9, 601.0], [44.0, 601.0], [44.1, 601.0], [44.2, 601.0], [44.3, 601.0], [44.4, 602.0], [44.5, 602.0], [44.6, 602.0], [44.7, 602.0], [44.8, 602.0], [44.9, 602.0], [45.0, 603.0], [45.1, 603.0], [45.2, 603.0], [45.3, 603.0], [45.4, 603.0], [45.5, 603.0], [45.6, 603.0], [45.7, 603.0], [45.8, 603.0], [45.9, 603.0], [46.0, 603.0], [46.1, 603.0], [46.2, 603.0], [46.3, 603.0], [46.4, 603.0], [46.5, 603.0], [46.6, 603.0], [46.7, 603.0], [46.8, 603.0], [46.9, 604.0], [47.0, 604.0], [47.1, 604.0], [47.2, 604.0], [47.3, 604.0], [47.4, 604.0], [47.5, 605.0], [47.6, 605.0], [47.7, 605.0], [47.8, 605.0], [47.9, 605.0], [48.0, 605.0], [48.1, 605.0], [48.2, 606.0], [48.3, 606.0], [48.4, 606.0], [48.5, 606.0], [48.6, 606.0], [48.7, 606.0], [48.8, 606.0], [48.9, 606.0], [49.0, 606.0], [49.1, 606.0], [49.2, 606.0], [49.3, 606.0], [49.4, 606.0], [49.5, 606.0], [49.6, 606.0], [49.7, 606.0], [49.8, 606.0], [49.9, 606.0], [50.0, 606.0], [50.1, 606.0], [50.2, 606.0], [50.3, 606.0], [50.4, 606.0], [50.5, 606.0], [50.6, 606.0], [50.7, 607.0], [50.8, 607.0], [50.9, 607.0], [51.0, 607.0], [51.1, 607.0], [51.2, 607.0], [51.3, 607.0], [51.4, 607.0], [51.5, 607.0], [51.6, 607.0], [51.7, 607.0], [51.8, 607.0], [51.9, 607.0], [52.0, 607.0], [52.1, 607.0], [52.2, 607.0], [52.3, 607.0], [52.4, 607.0], [52.5, 607.0], [52.6, 607.0], [52.7, 607.0], [52.8, 607.0], [52.9, 607.0], [53.0, 607.0], [53.1, 607.0], [53.2, 608.0], [53.3, 608.0], [53.4, 608.0], [53.5, 608.0], [53.6, 608.0], [53.7, 608.0], [53.8, 608.0], [53.9, 608.0], [54.0, 608.0], [54.1, 608.0], [54.2, 608.0], [54.3, 608.0], [54.4, 608.0], [54.5, 608.0], [54.6, 608.0], [54.7, 608.0], [54.8, 608.0], [54.9, 608.0], [55.0, 608.0], [55.1, 608.0], [55.2, 608.0], [55.3, 608.0], [55.4, 608.0], [55.5, 608.0], [55.6, 608.0], [55.7, 608.0], [55.8, 608.0], [55.9, 608.0], [56.0, 608.0], [56.1, 608.0], [56.2, 608.0], [56.3, 608.0], [56.4, 608.0], [56.5, 608.0], [56.6, 608.0], [56.7, 608.0], [56.8, 608.0], [56.9, 608.0], [57.0, 608.0], [57.1, 608.0], [57.2, 608.0], [57.3, 608.0], [57.4, 608.0], [57.5, 608.0], [57.6, 608.0], [57.7, 608.0], [57.8, 608.0], [57.9, 608.0], [58.0, 608.0], [58.1, 608.0], [58.2, 609.0], [58.3, 609.0], [58.4, 609.0], [58.5, 609.0], [58.6, 609.0], [58.7, 609.0], [58.8, 610.0], [58.9, 610.0], [59.0, 610.0], [59.1, 610.0], [59.2, 610.0], [59.3, 610.0], [59.4, 610.0], [59.5, 610.0], [59.6, 610.0], [59.7, 610.0], [59.8, 610.0], [59.9, 610.0], [60.0, 611.0], [60.1, 611.0], [60.2, 611.0], [60.3, 611.0], [60.4, 611.0], [60.5, 611.0], [60.6, 611.0], [60.7, 611.0], [60.8, 611.0], [60.9, 611.0], [61.0, 611.0], [61.1, 611.0], [61.2, 611.0], [61.3, 611.0], [61.4, 611.0], [61.5, 611.0], [61.6, 611.0], [61.7, 611.0], [61.8, 611.0], [61.9, 611.0], [62.0, 611.0], [62.1, 611.0], [62.2, 611.0], [62.3, 611.0], [62.4, 611.0], [62.5, 612.0], [62.6, 612.0], [62.7, 612.0], [62.8, 612.0], [62.9, 612.0], [63.0, 612.0], [63.1, 612.0], [63.2, 613.0], [63.3, 613.0], [63.4, 613.0], [63.5, 613.0], [63.6, 613.0], [63.7, 613.0], [63.8, 614.0], [63.9, 614.0], [64.0, 614.0], [64.1, 614.0], [64.2, 614.0], [64.3, 614.0], [64.4, 614.0], [64.5, 614.0], [64.6, 614.0], [64.7, 614.0], [64.8, 614.0], [64.9, 614.0], [65.0, 614.0], [65.1, 614.0], [65.2, 614.0], [65.3, 614.0], [65.4, 614.0], [65.5, 614.0], [65.6, 614.0], [65.7, 615.0], [65.8, 615.0], [65.9, 615.0], [66.0, 615.0], [66.1, 615.0], [66.2, 615.0], [66.3, 615.0], [66.4, 615.0], [66.5, 615.0], [66.6, 615.0], [66.7, 615.0], [66.8, 615.0], [66.9, 615.0], [67.0, 615.0], [67.1, 615.0], [67.2, 615.0], [67.3, 615.0], [67.4, 615.0], [67.5, 616.0], [67.6, 616.0], [67.7, 616.0], [67.8, 616.0], [67.9, 616.0], [68.0, 616.0], [68.1, 616.0], [68.2, 616.0], [68.3, 616.0], [68.4, 616.0], [68.5, 616.0], [68.6, 616.0], [68.7, 616.0], [68.8, 616.0], [68.9, 616.0], [69.0, 616.0], [69.1, 616.0], [69.2, 616.0], [69.3, 616.0], [69.4, 617.0], [69.5, 617.0], [69.6, 617.0], [69.7, 617.0], [69.8, 617.0], [69.9, 617.0], [70.0, 617.0], [70.1, 617.0], [70.2, 617.0], [70.3, 617.0], [70.4, 617.0], [70.5, 617.0], [70.6, 617.0], [70.7, 618.0], [70.8, 618.0], [70.9, 618.0], [71.0, 618.0], [71.1, 618.0], [71.2, 618.0], [71.3, 619.0], [71.4, 619.0], [71.5, 619.0], [71.6, 619.0], [71.7, 619.0], [71.8, 619.0], [71.9, 620.0], [72.0, 620.0], [72.1, 620.0], [72.2, 620.0], [72.3, 620.0], [72.4, 620.0], [72.5, 620.0], [72.6, 620.0], [72.7, 620.0], [72.8, 620.0], [72.9, 620.0], [73.0, 620.0], [73.1, 620.0], [73.2, 621.0], [73.3, 621.0], [73.4, 621.0], [73.5, 621.0], [73.6, 621.0], [73.7, 621.0], [73.8, 621.0], [73.9, 621.0], [74.0, 621.0], [74.1, 621.0], [74.2, 621.0], [74.3, 621.0], [74.4, 623.0], [74.5, 623.0], [74.6, 623.0], [74.7, 623.0], [74.8, 623.0], [74.9, 623.0], [75.0, 626.0], [75.1, 626.0], [75.2, 626.0], [75.3, 626.0], [75.4, 626.0], [75.5, 626.0], [75.6, 626.0], [75.7, 626.0], [75.8, 626.0], [75.9, 626.0], [76.0, 626.0], [76.1, 626.0], [76.2, 626.0], [76.3, 626.0], [76.4, 626.0], [76.5, 626.0], [76.6, 626.0], [76.7, 626.0], [76.8, 626.0], [76.9, 626.0], [77.0, 626.0], [77.1, 626.0], [77.2, 626.0], [77.3, 626.0], [77.4, 626.0], [77.5, 627.0], [77.6, 627.0], [77.7, 627.0], [77.8, 627.0], [77.9, 627.0], [78.0, 627.0], [78.1, 627.0], [78.2, 628.0], [78.3, 628.0], [78.4, 628.0], [78.5, 628.0], [78.6, 628.0], [78.7, 628.0], [78.8, 628.0], [78.9, 628.0], [79.0, 628.0], [79.1, 628.0], [79.2, 628.0], [79.3, 628.0], [79.4, 628.0], [79.5, 628.0], [79.6, 628.0], [79.7, 628.0], [79.8, 628.0], [79.9, 628.0], [80.0, 628.0], [80.1, 628.0], [80.2, 628.0], [80.3, 628.0], [80.4, 628.0], [80.5, 628.0], [80.6, 628.0], [80.7, 629.0], [80.8, 629.0], [80.9, 629.0], [81.0, 629.0], [81.1, 629.0], [81.2, 629.0], [81.3, 629.0], [81.4, 629.0], [81.5, 629.0], [81.6, 629.0], [81.7, 629.0], [81.8, 629.0], [81.9, 629.0], [82.0, 629.0], [82.1, 629.0], [82.2, 629.0], [82.3, 629.0], [82.4, 629.0], [82.5, 631.0], [82.6, 631.0], [82.7, 631.0], [82.8, 631.0], [82.9, 631.0], [83.0, 631.0], [83.1, 631.0], [83.2, 631.0], [83.3, 631.0], [83.4, 631.0], [83.5, 631.0], [83.6, 631.0], [83.7, 631.0], [83.8, 631.0], [83.9, 631.0], [84.0, 631.0], [84.1, 631.0], [84.2, 631.0], [84.3, 631.0], [84.4, 633.0], [84.5, 633.0], [84.6, 633.0], [84.7, 633.0], [84.8, 633.0], [84.9, 633.0], [85.0, 635.0], [85.1, 635.0], [85.2, 635.0], [85.3, 635.0], [85.4, 635.0], [85.5, 635.0], [85.6, 635.0], [85.7, 637.0], [85.8, 637.0], [85.9, 637.0], [86.0, 637.0], [86.1, 637.0], [86.2, 637.0], [86.3, 637.0], [86.4, 637.0], [86.5, 637.0], [86.6, 637.0], [86.7, 637.0], [86.8, 637.0], [86.9, 639.0], [87.0, 639.0], [87.1, 639.0], [87.2, 639.0], [87.3, 639.0], [87.4, 639.0], [87.5, 640.0], [87.6, 640.0], [87.7, 640.0], [87.8, 640.0], [87.9, 640.0], [88.0, 640.0], [88.1, 640.0], [88.2, 642.0], [88.3, 642.0], [88.4, 642.0], [88.5, 642.0], [88.6, 642.0], [88.7, 642.0], [88.8, 642.0], [88.9, 642.0], [89.0, 642.0], [89.1, 642.0], [89.2, 642.0], [89.3, 642.0], [89.4, 643.0], [89.5, 643.0], [89.6, 643.0], [89.7, 643.0], [89.8, 643.0], [89.9, 643.0], [90.0, 644.0], [90.1, 644.0], [90.2, 644.0], [90.3, 644.0], [90.4, 644.0], [90.5, 644.0], [90.6, 644.0], [90.7, 647.0], [90.8, 647.0], [90.9, 647.0], [91.0, 647.0], [91.1, 647.0], [91.2, 647.0], [91.3, 647.0], [91.4, 647.0], [91.5, 647.0], [91.6, 647.0], [91.7, 647.0], [91.8, 647.0], [91.9, 647.0], [92.0, 647.0], [92.1, 647.0], [92.2, 647.0], [92.3, 647.0], [92.4, 647.0], [92.5, 648.0], [92.6, 648.0], [92.7, 648.0], [92.8, 648.0], [92.9, 648.0], [93.0, 648.0], [93.1, 648.0], [93.2, 659.0], [93.3, 659.0], [93.4, 659.0], [93.5, 659.0], [93.6, 659.0], [93.7, 659.0], [93.8, 682.0], [93.9, 682.0], [94.0, 682.0], [94.1, 682.0], [94.2, 682.0], [94.3, 682.0], [94.4, 685.0], [94.5, 685.0], [94.6, 685.0], [94.7, 685.0], [94.8, 685.0], [94.9, 685.0], [95.0, 690.0], [95.1, 690.0], [95.2, 690.0], [95.3, 690.0], [95.4, 690.0], [95.5, 690.0], [95.6, 690.0], [95.7, 693.0], [95.8, 693.0], [95.9, 693.0], [96.0, 693.0], [96.1, 693.0], [96.2, 693.0], [96.3, 697.0], [96.4, 697.0], [96.5, 697.0], [96.6, 697.0], [96.7, 697.0], [96.8, 697.0], [96.9, 700.0], [97.0, 700.0], [97.1, 700.0], [97.2, 700.0], [97.3, 700.0], [97.4, 700.0], [97.5, 700.0], [97.6, 700.0], [97.7, 700.0], [97.8, 700.0], [97.9, 700.0], [98.0, 700.0], [98.1, 700.0], [98.2, 713.0], [98.3, 713.0], [98.4, 713.0], [98.5, 713.0], [98.6, 713.0], [98.7, 713.0], [98.8, 730.0], [98.9, 730.0], [99.0, 730.0], [99.1, 730.0], [99.2, 730.0], [99.3, 730.0], [99.4, 947.0], [99.5, 947.0], [99.6, 947.0], [99.7, 947.0], [99.8, 947.0], [99.9, 947.0]], "isOverall": false, "label": "configuration_2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 88.0, "series": [{"data": [[600.0, 88.0], [700.0, 4.0], [900.0, 1.0], [500.0, 67.0]], "isOverall": false, "label": "configuration_2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.65, "minX": 1.71292662E12, "maxY": 6.100000000000001, "series": [{"data": [[1.71292668E12, 6.100000000000001], [1.71292662E12, 2.65], [1.71292674E12, 2.65]], "isOverall": false, "label": "configuration_2_users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71292674E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 567.0, "minX": 2.0, "maxY": 664.5, "series": [{"data": [[8.0, 578.5], [2.0, 567.0], [9.0, 579.5], [11.0, 586.5], [3.0, 568.2], [12.0, 589.3333333333334], [13.0, 615.0], [14.0, 614.0], [15.0, 610.0434782608696], [17.0, 605.3333333333334], [18.0, 628.9629629629629], [19.0, 637.0], [20.0, 626.0], [5.0, 569.0], [21.0, 622.4375000000001], [22.0, 664.5], [23.0, 627.0], [6.0, 583.8888888888889], [24.0, 624.4166666666667]], "isOverall": false, "label": "configuration_2", "isController": false}, {"data": [[15.662499999999993, 609.2875]], "isOverall": false, "label": "configuration_2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 24.0, "title": "Time VS Threads"}},
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
        data: {"result": {"minY": 575.9999999999998, "minX": 1.71292662E12, "maxY": 618.958333333333, "series": [{"data": [[1.71292668E12, 618.958333333333], [1.71292662E12, 584.5500000000001], [1.71292674E12, 575.9999999999998]], "isOverall": false, "label": "configuration_2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 575.9499999999999, "minX": 1.71292662E12, "maxY": 618.9416666666668, "series": [{"data": [[1.71292668E12, 618.9416666666668], [1.71292662E12, 584.5500000000001], [1.71292674E12, 575.9499999999999]], "isOverall": false, "label": "configuration_2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71292662E12, "maxY": 0.25000000000000006, "series": [{"data": [[1.71292668E12, 0.03333333333333334], [1.71292662E12, 0.25000000000000006], [1.71292674E12, 0.0]], "isOverall": false, "label": "configuration_2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 569.5, "minX": 1.0, "maxY": 622.0, "series": [{"data": [[1.0, 569.5], [2.0, 585.5], [4.0, 622.0], [3.0, 609.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 569.5, "minX": 1.0, "maxY": 622.0, "series": [{"data": [[1.0, 569.5], [2.0, 585.5], [4.0, 622.0], [3.0, 609.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.71292662E12, "maxY": 2.0, "series": [{"data": [[1.71292668E12, 2.0], [1.71292662E12, 0.3333333333333333], [1.71292674E12, 0.3333333333333333]], "isOverall": false, "label": "configuration_2-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Transactions Per Second"}},
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

