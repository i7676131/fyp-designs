// Data and labels - CHART1 (Bar)
var days = ['BournemouthTech','Ratio','SiliconBeach','HeatherBrown','RatioPi','ChooseWisely','Remora','Briefd'];
var twitter1 = [12,14,27,11,15,33,37,12];
var chartLabel1 = 'Posts of the Week';

// Data and labels - CHART2 (Line)
var months = [];
var

// Get chart element from HTML
var ctx1 = document.getElementById("social_chart1");
var ctx2 = document.getElementById("social_chart2");
var ctx3 = document.getElementById("social_chart3");

var data1 = {
    labels: days,
    datasets: [{
        backgroundColor: "rgba(255,1,128,0.2)",
        borderColor: "rgba(255,1,128,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,1,128,0.5)",
        hoverBorderColor: "rgba(255,1,128,1)",
        data: twitter
    }]
};
var data2 = {
    labels: months,
    datasets: [{
        backgroundColor: "rgba(255,1,128,0.2)",
        borderColor: "rgba(255,1,128,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,1,128,0.5)",
        hoverBorderColor: "rgba(255,1,128,1)",
        data: twitter1
    }]
};
var data3 = {

};

var options1 = {
    title: {
        display: true,
        text: chartLabel,
        fontSize: 30,
        padding: 12
    },
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            stacked: true,
            gridLines: {
                display: true,
                color: "rgba(255,1,128,0.2)"
            }
        }],
        xAxes: [{
            gridLines: {
                display: false
            }
        }]
    },
    legend: {
        display: false
    }
};
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 16;

var myChart1 = new Chart(ctx1,{
    type: 'bar',
    options: options1,
    data: data1
});
var myChart2 = new Chart(ctx2,{
    type: 'line',
    options: options,
    data: data2
});
var myChart3 = new Chart(ctx3,{
    type: 'polarArea',
    options: options,
    data: data3
});