import ApexCharts from 'apexcharts'

// Generate chart
var options = {
    chart: {
      height: 200,
      type: "radialBar",
      fontFamily: 'Bebas Neue'
    },
  
    series: [78.9],
    colors: ["#5900D7"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#F1E9FD"
        },
        track: {},
        dataLabels: {
          value: {
            color: "#000",
            fontSize: "18px",
            show: true,
            offsetY: -10,
            offsetX: -10,
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#5900D7"],
        stops: [0, 100]
      }
    },
    stroke: {

    },
    labels: [""],
    responsive: [{
        breakpoint: 768,
        options: {
            chart: {
                height: 150
            }
        },
    }]
    
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
  