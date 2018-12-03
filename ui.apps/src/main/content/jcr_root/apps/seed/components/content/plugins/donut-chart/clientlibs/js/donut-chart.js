var doughnutData = {
    labels: ["App","Software","Laptop" ],
    datasets: [{
        data: [300,50,100],
        backgroundColor: ["#a3e1d4","#dedede","#9CC3DA"]
    }]
} ;


var doughnutOptions = {
    responsive: false,
    legend: {
        display: false
    }
};


var ctx4 = document.getElementById("doughnutChart").getContext("2d");
new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});
