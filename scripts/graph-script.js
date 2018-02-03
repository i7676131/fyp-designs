// Data and labels
var days = ['BournemouthTech','Ratio','SiliconBeach','HeatherBrown','RatioPi','ChooseWisely'];
var twitter = [12,14,27,11,15,33];
var chartLabel = 'Tweets of the Week';

// Get chart element from HTML
var ctx = document.getElementById("social_chart");

var data = {

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
var options = {
    title: {
        display: true,
        text: chartLabel,
        fontSize: 30,
        padding: 12
    },
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            stacked: true,
            gridLines: {
                display: true,
                color: "rgba(255,1,128,0.2)"
            }
        }],
        yAxes: [{
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

var myChart = new Chart(ctx,{
    type: 'horizontalBar',
    options: options,
    data: data
});