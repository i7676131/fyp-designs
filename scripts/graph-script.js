// Our labels along the x-axis
var days = [1,2,3,4,5,6,7,8,9,10];

// For drawing the lines
var twitter = [12,14,15,17,18,15,13,15,13,14];
var instagram = [8,3,1,2,5,9,7,2,7,7];
var facebook = [6,7,8,1,3,7,8,7,5,4];

var ctx = document.getElementById("social_chart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: days,
        datasets: [
            {
                data: twitter,
                label: "Twitter",
                borderColor: "#3e95cd",
                fill: false
            },
            {
                data: instagram,
                label: "Instagram",
                borderColor: "#8e5ea2",
                fill: false
            },
            {
                data: facebook,
                label: "Facebook",
                borderColor: "#3cba9f",
                fill: false
            }
        ]
    }
});