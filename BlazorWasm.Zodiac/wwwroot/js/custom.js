window.radarChart = function (id, title, series) {
    console.log({ series });
    var data = series.map(m => m.data);
    var label = series.map(m => m.label);
    var options = {
        series: [{
            name: 'Percentage',
            data: data,
        }],
        chart: {
            height: 350,
            type: 'radar',
        },
        dataLabels: {
            enabled: true
        },
        plotOptions: {
            radar: {
                size: 140,
                polygons: {
                    strokeColors: '#e9e9e9',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        //title: {
        //    text: title
        //},
        colors: ['#f4aa36'],
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: '#FF4560',
            strokeWidth: 2,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        xaxis: {
            categories: label
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function (val, i) {
                    if (i % 2 === 0) {
                        return val
                    } else {
                        return ''
                    }
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector(id), options);
    chart.render();
}

window.setDatePicker = function (id) {
    $('#' + id).datepicker({
        format: 'dd-mm-yyyy',
        autoHide: true
    });
}

window.getDatePicker = function (id) {
    return $('#' + id).val();
}

window.scollTop0 = function (id) {
    $(window).scrollTop(0);
}