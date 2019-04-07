function createChartLines(arr) {
    
    var myChart = echarts.init(document.getElementById('chartLineId'));
    var seriesList = [];
    for (var j = 0; j < arr['seriesNameTot'].length; j++) {
        seriesList.push(
            {
                name: arr['seriesNameTot'][j],
                type: 'line',
                smooth: false,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: arr['seriesLineColorTot'][j]
                    }
                },
                areaStyle: {
                    normal: {
                        color: arr['seriesAreaColorTot'][j]
                    }
                },
                data: arr['seriesDataTot'][j]
            }
        );
    }

    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            },
            extraCssText: 'text-align: left;'
        },
        legend: {
            orient: 'horizontal', // 'vertical'
            x: 'center', // 'center' | 'left' | {number},
            y: 'bottom', // 'center' | 'bottom' | {number}
            backgroundColor: 'none',
            borderColor: '#4e6a26',
            borderWidth: 0,
            padding: 0,
            itemGap: 15,
            textStyle: {color: '#4e6a26'},
            data: arr['dataLegendTot']
        },
        xAxis: {
            type: 'category',
            name: 'mes',
            boundaryGap: false,
            data: arr['dateTot']
        },
        yAxis: {
            name: arr['yAxisTitleTot'],
            type: 'value',
            boundaryGap: [0, '10%']
        },
        dataZoom: [{
                type: 'inside',
                start: 0,
                end: 100
            }, {
                start: 0,
                end: 100,
                backgroundColor: '#cbef99',
                dataBackgroundColor: '#8db356',
                fillerColor: '#4e6a2688',
                height: 15,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
        series: seriesList
    };

    myChart.setOption(option);
}

var request = new XMLHttpRequest();
request.open('GET', './chartdata/linechart', true);
request.onload = function () {
    var arr = JSON.parse(this.response);
    console.log(arr);
    createChartLines(arr);
};

request.send();
