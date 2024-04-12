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
        data: {"result": {"minY": 356.0, "minX": 0.0, "maxY": 522.0, "series": [{"data": [[0.0, 356.0], [0.1, 356.0], [0.2, 356.0], [0.3, 356.0], [0.4, 356.0], [0.5, 356.0], [0.6, 356.0], [0.7, 359.0], [0.8, 359.0], [0.9, 359.0], [1.0, 359.0], [1.1, 359.0], [1.2, 359.0], [1.3, 362.0], [1.4, 362.0], [1.5, 362.0], [1.6, 362.0], [1.7, 362.0], [1.8, 362.0], [1.9, 362.0], [2.0, 362.0], [2.1, 362.0], [2.2, 362.0], [2.3, 362.0], [2.4, 362.0], [2.5, 362.0], [2.6, 362.0], [2.7, 362.0], [2.8, 362.0], [2.9, 362.0], [3.0, 362.0], [3.1, 362.0], [3.2, 364.0], [3.3, 364.0], [3.4, 364.0], [3.5, 364.0], [3.6, 364.0], [3.7, 364.0], [3.8, 364.0], [3.9, 364.0], [4.0, 364.0], [4.1, 364.0], [4.2, 364.0], [4.3, 364.0], [4.4, 365.0], [4.5, 365.0], [4.6, 365.0], [4.7, 365.0], [4.8, 365.0], [4.9, 365.0], [5.0, 366.0], [5.1, 366.0], [5.2, 366.0], [5.3, 366.0], [5.4, 366.0], [5.5, 366.0], [5.6, 366.0], [5.7, 368.0], [5.8, 368.0], [5.9, 368.0], [6.0, 368.0], [6.1, 368.0], [6.2, 368.0], [6.3, 368.0], [6.4, 368.0], [6.5, 368.0], [6.6, 368.0], [6.7, 368.0], [6.8, 368.0], [6.9, 369.0], [7.0, 369.0], [7.1, 369.0], [7.2, 369.0], [7.3, 369.0], [7.4, 369.0], [7.5, 369.0], [7.6, 369.0], [7.7, 369.0], [7.8, 369.0], [7.9, 369.0], [8.0, 369.0], [8.1, 369.0], [8.2, 370.0], [8.3, 370.0], [8.4, 370.0], [8.5, 370.0], [8.6, 370.0], [8.7, 370.0], [8.8, 373.0], [8.9, 373.0], [9.0, 373.0], [9.1, 373.0], [9.2, 373.0], [9.3, 373.0], [9.4, 373.0], [9.5, 373.0], [9.6, 373.0], [9.7, 373.0], [9.8, 373.0], [9.9, 373.0], [10.0, 374.0], [10.1, 374.0], [10.2, 374.0], [10.3, 374.0], [10.4, 374.0], [10.5, 374.0], [10.6, 374.0], [10.7, 376.0], [10.8, 376.0], [10.9, 376.0], [11.0, 376.0], [11.1, 376.0], [11.2, 376.0], [11.3, 377.0], [11.4, 377.0], [11.5, 377.0], [11.6, 377.0], [11.7, 377.0], [11.8, 377.0], [11.9, 377.0], [12.0, 377.0], [12.1, 377.0], [12.2, 377.0], [12.3, 377.0], [12.4, 377.0], [12.5, 377.0], [12.6, 377.0], [12.7, 377.0], [12.8, 377.0], [12.9, 377.0], [13.0, 377.0], [13.1, 377.0], [13.2, 378.0], [13.3, 378.0], [13.4, 378.0], [13.5, 378.0], [13.6, 378.0], [13.7, 378.0], [13.8, 378.0], [13.9, 378.0], [14.0, 378.0], [14.1, 378.0], [14.2, 378.0], [14.3, 378.0], [14.4, 378.0], [14.5, 378.0], [14.6, 378.0], [14.7, 378.0], [14.8, 378.0], [14.9, 378.0], [15.0, 379.0], [15.1, 379.0], [15.2, 379.0], [15.3, 379.0], [15.4, 379.0], [15.5, 379.0], [15.6, 379.0], [15.7, 379.0], [15.8, 379.0], [15.9, 379.0], [16.0, 379.0], [16.1, 379.0], [16.2, 379.0], [16.3, 379.0], [16.4, 379.0], [16.5, 379.0], [16.6, 379.0], [16.7, 379.0], [16.8, 379.0], [16.9, 379.0], [17.0, 379.0], [17.1, 379.0], [17.2, 379.0], [17.3, 379.0], [17.4, 379.0], [17.5, 380.0], [17.6, 380.0], [17.7, 380.0], [17.8, 380.0], [17.9, 380.0], [18.0, 380.0], [18.1, 380.0], [18.2, 380.0], [18.3, 380.0], [18.4, 380.0], [18.5, 380.0], [18.6, 380.0], [18.7, 380.0], [18.8, 380.0], [18.9, 380.0], [19.0, 380.0], [19.1, 380.0], [19.2, 380.0], [19.3, 380.0], [19.4, 381.0], [19.5, 381.0], [19.6, 381.0], [19.7, 381.0], [19.8, 381.0], [19.9, 381.0], [20.0, 383.0], [20.1, 383.0], [20.2, 383.0], [20.3, 383.0], [20.4, 383.0], [20.5, 383.0], [20.6, 383.0], [20.7, 383.0], [20.8, 383.0], [20.9, 383.0], [21.0, 383.0], [21.1, 383.0], [21.2, 383.0], [21.3, 384.0], [21.4, 384.0], [21.5, 384.0], [21.6, 384.0], [21.7, 384.0], [21.8, 384.0], [21.9, 384.0], [22.0, 384.0], [22.1, 384.0], [22.2, 384.0], [22.3, 384.0], [22.4, 384.0], [22.5, 384.0], [22.6, 384.0], [22.7, 384.0], [22.8, 384.0], [22.9, 384.0], [23.0, 384.0], [23.1, 384.0], [23.2, 385.0], [23.3, 385.0], [23.4, 385.0], [23.5, 385.0], [23.6, 385.0], [23.7, 385.0], [23.8, 385.0], [23.9, 385.0], [24.0, 385.0], [24.1, 385.0], [24.2, 385.0], [24.3, 385.0], [24.4, 385.0], [24.5, 385.0], [24.6, 385.0], [24.7, 385.0], [24.8, 385.0], [24.9, 385.0], [25.0, 385.0], [25.1, 385.0], [25.2, 385.0], [25.3, 385.0], [25.4, 385.0], [25.5, 385.0], [25.6, 385.0], [25.7, 386.0], [25.8, 386.0], [25.9, 386.0], [26.0, 386.0], [26.1, 386.0], [26.2, 386.0], [26.3, 386.0], [26.4, 386.0], [26.5, 386.0], [26.6, 386.0], [26.7, 386.0], [26.8, 386.0], [26.9, 387.0], [27.0, 387.0], [27.1, 387.0], [27.2, 387.0], [27.3, 387.0], [27.4, 387.0], [27.5, 388.0], [27.6, 388.0], [27.7, 388.0], [27.8, 388.0], [27.9, 388.0], [28.0, 388.0], [28.1, 388.0], [28.2, 389.0], [28.3, 389.0], [28.4, 389.0], [28.5, 389.0], [28.6, 389.0], [28.7, 389.0], [28.8, 389.0], [28.9, 389.0], [29.0, 389.0], [29.1, 389.0], [29.2, 389.0], [29.3, 389.0], [29.4, 390.0], [29.5, 390.0], [29.6, 390.0], [29.7, 390.0], [29.8, 390.0], [29.9, 390.0], [30.0, 392.0], [30.1, 392.0], [30.2, 392.0], [30.3, 392.0], [30.4, 392.0], [30.5, 392.0], [30.6, 392.0], [30.7, 393.0], [30.8, 393.0], [30.9, 393.0], [31.0, 393.0], [31.1, 393.0], [31.2, 393.0], [31.3, 394.0], [31.4, 394.0], [31.5, 394.0], [31.6, 394.0], [31.7, 394.0], [31.8, 394.0], [31.9, 394.0], [32.0, 394.0], [32.1, 394.0], [32.2, 394.0], [32.3, 394.0], [32.4, 394.0], [32.5, 394.0], [32.6, 394.0], [32.7, 394.0], [32.8, 394.0], [32.9, 394.0], [33.0, 394.0], [33.1, 394.0], [33.2, 395.0], [33.3, 395.0], [33.4, 395.0], [33.5, 395.0], [33.6, 395.0], [33.7, 395.0], [33.8, 395.0], [33.9, 395.0], [34.0, 395.0], [34.1, 395.0], [34.2, 395.0], [34.3, 395.0], [34.4, 396.0], [34.5, 396.0], [34.6, 396.0], [34.7, 396.0], [34.8, 396.0], [34.9, 396.0], [35.0, 396.0], [35.1, 396.0], [35.2, 396.0], [35.3, 396.0], [35.4, 396.0], [35.5, 396.0], [35.6, 396.0], [35.7, 397.0], [35.8, 397.0], [35.9, 397.0], [36.0, 397.0], [36.1, 397.0], [36.2, 397.0], [36.3, 397.0], [36.4, 397.0], [36.5, 397.0], [36.6, 397.0], [36.7, 397.0], [36.8, 397.0], [36.9, 397.0], [37.0, 397.0], [37.1, 397.0], [37.2, 397.0], [37.3, 397.0], [37.4, 397.0], [37.5, 400.0], [37.6, 400.0], [37.7, 400.0], [37.8, 400.0], [37.9, 400.0], [38.0, 400.0], [38.1, 400.0], [38.2, 400.0], [38.3, 400.0], [38.4, 400.0], [38.5, 400.0], [38.6, 400.0], [38.7, 400.0], [38.8, 400.0], [38.9, 400.0], [39.0, 400.0], [39.1, 400.0], [39.2, 400.0], [39.3, 400.0], [39.4, 400.0], [39.5, 400.0], [39.6, 400.0], [39.7, 400.0], [39.8, 400.0], [39.9, 400.0], [40.0, 400.0], [40.1, 400.0], [40.2, 400.0], [40.3, 400.0], [40.4, 400.0], [40.5, 400.0], [40.6, 400.0], [40.7, 401.0], [40.8, 401.0], [40.9, 401.0], [41.0, 401.0], [41.1, 401.0], [41.2, 401.0], [41.3, 402.0], [41.4, 402.0], [41.5, 402.0], [41.6, 402.0], [41.7, 402.0], [41.8, 402.0], [41.9, 403.0], [42.0, 403.0], [42.1, 403.0], [42.2, 403.0], [42.3, 403.0], [42.4, 403.0], [42.5, 403.0], [42.6, 403.0], [42.7, 403.0], [42.8, 403.0], [42.9, 403.0], [43.0, 403.0], [43.1, 403.0], [43.2, 403.0], [43.3, 403.0], [43.4, 403.0], [43.5, 403.0], [43.6, 403.0], [43.7, 403.0], [43.8, 403.0], [43.9, 403.0], [44.0, 403.0], [44.1, 403.0], [44.2, 403.0], [44.3, 403.0], [44.4, 403.0], [44.5, 403.0], [44.6, 403.0], [44.7, 403.0], [44.8, 403.0], [44.9, 403.0], [45.0, 404.0], [45.1, 404.0], [45.2, 404.0], [45.3, 404.0], [45.4, 404.0], [45.5, 404.0], [45.6, 404.0], [45.7, 404.0], [45.8, 404.0], [45.9, 404.0], [46.0, 404.0], [46.1, 404.0], [46.2, 404.0], [46.3, 404.0], [46.4, 404.0], [46.5, 404.0], [46.6, 404.0], [46.7, 404.0], [46.8, 404.0], [46.9, 405.0], [47.0, 405.0], [47.1, 405.0], [47.2, 405.0], [47.3, 405.0], [47.4, 405.0], [47.5, 405.0], [47.6, 405.0], [47.7, 405.0], [47.8, 405.0], [47.9, 405.0], [48.0, 405.0], [48.1, 405.0], [48.2, 405.0], [48.3, 405.0], [48.4, 405.0], [48.5, 405.0], [48.6, 405.0], [48.7, 405.0], [48.8, 405.0], [48.9, 405.0], [49.0, 405.0], [49.1, 405.0], [49.2, 405.0], [49.3, 405.0], [49.4, 406.0], [49.5, 406.0], [49.6, 406.0], [49.7, 406.0], [49.8, 406.0], [49.9, 406.0], [50.0, 406.0], [50.1, 406.0], [50.2, 406.0], [50.3, 406.0], [50.4, 406.0], [50.5, 406.0], [50.6, 406.0], [50.7, 406.0], [50.8, 406.0], [50.9, 406.0], [51.0, 406.0], [51.1, 406.0], [51.2, 406.0], [51.3, 407.0], [51.4, 407.0], [51.5, 407.0], [51.6, 407.0], [51.7, 407.0], [51.8, 407.0], [51.9, 407.0], [52.0, 407.0], [52.1, 407.0], [52.2, 407.0], [52.3, 407.0], [52.4, 407.0], [52.5, 407.0], [52.6, 407.0], [52.7, 407.0], [52.8, 407.0], [52.9, 407.0], [53.0, 407.0], [53.1, 407.0], [53.2, 408.0], [53.3, 408.0], [53.4, 408.0], [53.5, 408.0], [53.6, 408.0], [53.7, 408.0], [53.8, 409.0], [53.9, 409.0], [54.0, 409.0], [54.1, 409.0], [54.2, 409.0], [54.3, 409.0], [54.4, 409.0], [54.5, 409.0], [54.6, 409.0], [54.7, 409.0], [54.8, 409.0], [54.9, 409.0], [55.0, 409.0], [55.1, 409.0], [55.2, 409.0], [55.3, 409.0], [55.4, 409.0], [55.5, 409.0], [55.6, 409.0], [55.7, 409.0], [55.8, 409.0], [55.9, 409.0], [56.0, 409.0], [56.1, 409.0], [56.2, 409.0], [56.3, 409.0], [56.4, 409.0], [56.5, 409.0], [56.6, 409.0], [56.7, 409.0], [56.8, 409.0], [56.9, 411.0], [57.0, 411.0], [57.1, 411.0], [57.2, 411.0], [57.3, 411.0], [57.4, 411.0], [57.5, 411.0], [57.6, 411.0], [57.7, 411.0], [57.8, 411.0], [57.9, 411.0], [58.0, 411.0], [58.1, 411.0], [58.2, 411.0], [58.3, 411.0], [58.4, 411.0], [58.5, 411.0], [58.6, 411.0], [58.7, 411.0], [58.8, 411.0], [58.9, 411.0], [59.0, 411.0], [59.1, 411.0], [59.2, 411.0], [59.3, 411.0], [59.4, 413.0], [59.5, 413.0], [59.6, 413.0], [59.7, 413.0], [59.8, 413.0], [59.9, 413.0], [60.0, 413.0], [60.1, 413.0], [60.2, 413.0], [60.3, 413.0], [60.4, 413.0], [60.5, 413.0], [60.6, 413.0], [60.7, 413.0], [60.8, 413.0], [60.9, 413.0], [61.0, 413.0], [61.1, 413.0], [61.2, 413.0], [61.3, 415.0], [61.4, 415.0], [61.5, 415.0], [61.6, 415.0], [61.7, 415.0], [61.8, 415.0], [61.9, 415.0], [62.0, 415.0], [62.1, 415.0], [62.2, 415.0], [62.3, 415.0], [62.4, 415.0], [62.5, 416.0], [62.6, 416.0], [62.7, 416.0], [62.8, 416.0], [62.9, 416.0], [63.0, 416.0], [63.1, 416.0], [63.2, 417.0], [63.3, 417.0], [63.4, 417.0], [63.5, 417.0], [63.6, 417.0], [63.7, 417.0], [63.8, 417.0], [63.9, 417.0], [64.0, 417.0], [64.1, 417.0], [64.2, 417.0], [64.3, 417.0], [64.4, 417.0], [64.5, 417.0], [64.6, 417.0], [64.7, 417.0], [64.8, 417.0], [64.9, 417.0], [65.0, 417.0], [65.1, 417.0], [65.2, 417.0], [65.3, 417.0], [65.4, 417.0], [65.5, 417.0], [65.6, 417.0], [65.7, 417.0], [65.8, 417.0], [65.9, 417.0], [66.0, 417.0], [66.1, 417.0], [66.2, 417.0], [66.3, 418.0], [66.4, 418.0], [66.5, 418.0], [66.6, 418.0], [66.7, 418.0], [66.8, 418.0], [66.9, 418.0], [67.0, 418.0], [67.1, 418.0], [67.2, 418.0], [67.3, 418.0], [67.4, 418.0], [67.5, 418.0], [67.6, 418.0], [67.7, 418.0], [67.8, 418.0], [67.9, 418.0], [68.0, 418.0], [68.1, 418.0], [68.2, 418.0], [68.3, 418.0], [68.4, 418.0], [68.5, 418.0], [68.6, 418.0], [68.7, 418.0], [68.8, 418.0], [68.9, 418.0], [69.0, 418.0], [69.1, 418.0], [69.2, 418.0], [69.3, 418.0], [69.4, 419.0], [69.5, 419.0], [69.6, 419.0], [69.7, 419.0], [69.8, 419.0], [69.9, 419.0], [70.0, 419.0], [70.1, 419.0], [70.2, 419.0], [70.3, 419.0], [70.4, 419.0], [70.5, 419.0], [70.6, 419.0], [70.7, 420.0], [70.8, 420.0], [70.9, 420.0], [71.0, 420.0], [71.1, 420.0], [71.2, 420.0], [71.3, 421.0], [71.4, 421.0], [71.5, 421.0], [71.6, 421.0], [71.7, 421.0], [71.8, 421.0], [71.9, 421.0], [72.0, 421.0], [72.1, 421.0], [72.2, 421.0], [72.3, 421.0], [72.4, 421.0], [72.5, 422.0], [72.6, 422.0], [72.7, 422.0], [72.8, 422.0], [72.9, 422.0], [73.0, 422.0], [73.1, 422.0], [73.2, 424.0], [73.3, 424.0], [73.4, 424.0], [73.5, 424.0], [73.6, 424.0], [73.7, 424.0], [73.8, 424.0], [73.9, 424.0], [74.0, 424.0], [74.1, 424.0], [74.2, 424.0], [74.3, 424.0], [74.4, 425.0], [74.5, 425.0], [74.6, 425.0], [74.7, 425.0], [74.8, 425.0], [74.9, 425.0], [75.0, 425.0], [75.1, 425.0], [75.2, 425.0], [75.3, 425.0], [75.4, 425.0], [75.5, 425.0], [75.6, 425.0], [75.7, 426.0], [75.8, 426.0], [75.9, 426.0], [76.0, 426.0], [76.1, 426.0], [76.2, 426.0], [76.3, 428.0], [76.4, 428.0], [76.5, 428.0], [76.6, 428.0], [76.7, 428.0], [76.8, 428.0], [76.9, 428.0], [77.0, 428.0], [77.1, 428.0], [77.2, 428.0], [77.3, 428.0], [77.4, 428.0], [77.5, 428.0], [77.6, 428.0], [77.7, 428.0], [77.8, 428.0], [77.9, 428.0], [78.0, 428.0], [78.1, 428.0], [78.2, 428.0], [78.3, 428.0], [78.4, 428.0], [78.5, 428.0], [78.6, 428.0], [78.7, 428.0], [78.8, 430.0], [78.9, 430.0], [79.0, 430.0], [79.1, 430.0], [79.2, 430.0], [79.3, 430.0], [79.4, 430.0], [79.5, 430.0], [79.6, 430.0], [79.7, 430.0], [79.8, 430.0], [79.9, 430.0], [80.0, 432.0], [80.1, 432.0], [80.2, 432.0], [80.3, 432.0], [80.4, 432.0], [80.5, 432.0], [80.6, 432.0], [80.7, 433.0], [80.8, 433.0], [80.9, 433.0], [81.0, 433.0], [81.1, 433.0], [81.2, 433.0], [81.3, 433.0], [81.4, 433.0], [81.5, 433.0], [81.6, 433.0], [81.7, 433.0], [81.8, 433.0], [81.9, 434.0], [82.0, 434.0], [82.1, 434.0], [82.2, 434.0], [82.3, 434.0], [82.4, 434.0], [82.5, 434.0], [82.6, 434.0], [82.7, 434.0], [82.8, 434.0], [82.9, 434.0], [83.0, 434.0], [83.1, 434.0], [83.2, 435.0], [83.3, 435.0], [83.4, 435.0], [83.5, 435.0], [83.6, 435.0], [83.7, 435.0], [83.8, 435.0], [83.9, 435.0], [84.0, 435.0], [84.1, 435.0], [84.2, 435.0], [84.3, 435.0], [84.4, 436.0], [84.5, 436.0], [84.6, 436.0], [84.7, 436.0], [84.8, 436.0], [84.9, 436.0], [85.0, 437.0], [85.1, 437.0], [85.2, 437.0], [85.3, 437.0], [85.4, 437.0], [85.5, 437.0], [85.6, 437.0], [85.7, 438.0], [85.8, 438.0], [85.9, 438.0], [86.0, 438.0], [86.1, 438.0], [86.2, 438.0], [86.3, 439.0], [86.4, 439.0], [86.5, 439.0], [86.6, 439.0], [86.7, 439.0], [86.8, 439.0], [86.9, 439.0], [87.0, 439.0], [87.1, 439.0], [87.2, 439.0], [87.3, 439.0], [87.4, 439.0], [87.5, 439.0], [87.6, 439.0], [87.7, 439.0], [87.8, 439.0], [87.9, 439.0], [88.0, 439.0], [88.1, 439.0], [88.2, 441.0], [88.3, 441.0], [88.4, 441.0], [88.5, 441.0], [88.6, 441.0], [88.7, 441.0], [88.8, 442.0], [88.9, 442.0], [89.0, 442.0], [89.1, 442.0], [89.2, 442.0], [89.3, 442.0], [89.4, 443.0], [89.5, 443.0], [89.6, 443.0], [89.7, 443.0], [89.8, 443.0], [89.9, 443.0], [90.0, 443.0], [90.1, 443.0], [90.2, 443.0], [90.3, 443.0], [90.4, 443.0], [90.5, 443.0], [90.6, 443.0], [90.7, 444.0], [90.8, 444.0], [90.9, 444.0], [91.0, 444.0], [91.1, 444.0], [91.2, 444.0], [91.3, 461.0], [91.4, 461.0], [91.5, 461.0], [91.6, 461.0], [91.7, 461.0], [91.8, 461.0], [91.9, 463.0], [92.0, 463.0], [92.1, 463.0], [92.2, 463.0], [92.3, 463.0], [92.4, 463.0], [92.5, 465.0], [92.6, 465.0], [92.7, 465.0], [92.8, 465.0], [92.9, 465.0], [93.0, 465.0], [93.1, 465.0], [93.2, 477.0], [93.3, 477.0], [93.4, 477.0], [93.5, 477.0], [93.6, 477.0], [93.7, 477.0], [93.8, 479.0], [93.9, 479.0], [94.0, 479.0], [94.1, 479.0], [94.2, 479.0], [94.3, 479.0], [94.4, 492.0], [94.5, 492.0], [94.6, 492.0], [94.7, 492.0], [94.8, 492.0], [94.9, 492.0], [95.0, 497.0], [95.1, 497.0], [95.2, 497.0], [95.3, 497.0], [95.4, 497.0], [95.5, 497.0], [95.6, 497.0], [95.7, 499.0], [95.8, 499.0], [95.9, 499.0], [96.0, 499.0], [96.1, 499.0], [96.2, 499.0], [96.3, 500.0], [96.4, 500.0], [96.5, 500.0], [96.6, 500.0], [96.7, 500.0], [96.8, 500.0], [96.9, 504.0], [97.0, 504.0], [97.1, 504.0], [97.2, 504.0], [97.3, 504.0], [97.4, 504.0], [97.5, 505.0], [97.6, 505.0], [97.7, 505.0], [97.8, 505.0], [97.9, 505.0], [98.0, 505.0], [98.1, 505.0], [98.2, 514.0], [98.3, 514.0], [98.4, 514.0], [98.5, 514.0], [98.6, 514.0], [98.7, 514.0], [98.8, 516.0], [98.9, 516.0], [99.0, 516.0], [99.1, 516.0], [99.2, 516.0], [99.3, 516.0], [99.4, 522.0], [99.5, 522.0], [99.6, 522.0], [99.7, 522.0], [99.8, 522.0], [99.9, 522.0]], "isOverall": false, "label": "configuration_3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 300.0, "maxY": 94.0, "series": [{"data": [[300.0, 60.0], [400.0, 94.0], [500.0, 6.0]], "isOverall": false, "label": "configuration_3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 155.0, "series": [{"data": [[0.0, 155.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.444444444444444, "minX": 1.71292662E12, "maxY": 6.1000000000000005, "series": [{"data": [[1.71292668E12, 6.1000000000000005], [1.71292662E12, 2.772727272727273], [1.71292674E12, 2.444444444444444]], "isOverall": false, "label": "configuration_3_users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71292674E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 371.5, "minX": 3.0, "maxY": 451.3333333333333, "series": [{"data": [[8.0, 378.0], [17.0, 408.0], [9.0, 382.53333333333336], [18.0, 416.5172413793103], [21.0, 423.3611111111111], [23.0, 451.3333333333333], [3.0, 371.5], [6.0, 381.7], [12.0, 411.45000000000005], [24.0, 425.07692307692304], [14.0, 418.0], [15.0, 408.95833333333337]], "isOverall": false, "label": "configuration_3", "isController": false}, {"data": [[15.781250000000009, 410.3125000000001]], "isOverall": false, "label": "configuration_3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 24.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 47.1, "minX": 1.71292662E12, "maxY": 462.0, "series": [{"data": [[1.71292668E12, 462.0], [1.71292662E12, 84.7], [1.71292674E12, 69.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71292668E12, 314.0], [1.71292662E12, 57.56666666666667], [1.71292674E12, 47.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71292674E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 387.31818181818187, "minX": 1.71292662E12, "maxY": 417.6250000000001, "series": [{"data": [[1.71292668E12, 417.6250000000001], [1.71292662E12, 387.31818181818187], [1.71292674E12, 389.6666666666667]], "isOverall": false, "label": "configuration_3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 387.31818181818187, "minX": 1.71292662E12, "maxY": 417.61666666666673, "series": [{"data": [[1.71292668E12, 417.61666666666673], [1.71292662E12, 387.31818181818187], [1.71292674E12, 389.6666666666667]], "isOverall": false, "label": "configuration_3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71292662E12, "maxY": 0.27272727272727276, "series": [{"data": [[1.71292668E12, 0.03333333333333334], [1.71292662E12, 0.27272727272727276], [1.71292674E12, 0.0]], "isOverall": false, "label": "configuration_3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 356.0, "minX": 1.71292662E12, "maxY": 522.0, "series": [{"data": [[1.71292668E12, 505.0], [1.71292662E12, 522.0], [1.71292674E12, 516.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71292668E12, 443.9], [1.71292662E12, 437.2], [1.71292674E12, 514.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71292668E12, 504.78999999999996], [1.71292662E12, 522.0], [1.71292674E12, 516.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71292668E12, 491.34999999999985], [1.71292662E12, 509.54999999999984], [1.71292674E12, 516.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71292668E12, 379.0], [1.71292662E12, 356.0], [1.71292674E12, 362.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71292668E12, 412.0], [1.71292662E12, 378.5], [1.71292674E12, 375.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71292674E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 368.0, "minX": 1.0, "maxY": 419.5, "series": [{"data": [[1.0, 368.0], [2.0, 389.0], [4.0, 419.5], [3.0, 409.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 368.0, "minX": 1.0, "maxY": 419.5, "series": [{"data": [[1.0, 368.0], [2.0, 389.0], [4.0, 419.5], [3.0, 409.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.71292662E12, "maxY": 2.0, "series": [{"data": [[1.71292668E12, 2.0], [1.71292662E12, 0.36666666666666664], [1.71292674E12, 0.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71292674E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.71292662E12, "maxY": 2.0, "series": [{"data": [[1.71292668E12, 2.0], [1.71292662E12, 0.36666666666666664], [1.71292674E12, 0.3]], "isOverall": false, "label": "configuration_3-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.71292662E12, "maxY": 2.0, "series": [{"data": [[1.71292668E12, 2.0], [1.71292662E12, 0.36666666666666664], [1.71292674E12, 0.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71292674E12, "title": "Total Transactions Per Second"}},
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

