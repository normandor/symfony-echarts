function createChart(jsonData) {
    var myChart = echarts.init(document.getElementById('chartPieId'));

    var itemStyle = {
        normal: {
            opacity: 0.7
        }
    };
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name + "\n" + Math.round(params.percent) + "%";
            }
        },
        series: [{
                name: 'rs',
                type: 'pie',
                radius: '55%',
                selectedMode: 'single',
                selectedOffset: 15,
                clockwise: true,
                label: {
                    normal: {
                        formatter: function (params) {
                            return params.name + "\n(" + Math.round(params.percent) + "%)";
                        },
                        textStyle: {
                            fontSize: 12,
                            color: '#4e6a26'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#4e6a26'
                        }
                    }
                },
                data: jsonData,
                itemStyle: itemStyle
            }]
    };
    myChart.setOption(option);
}

var request = new XMLHttpRequest();
request.open('GET', 'chartdata/piechart', true);
request.onload = function () {
    var arr = JSON.parse(this.response);
    createChart(arr);
};

request.send();

