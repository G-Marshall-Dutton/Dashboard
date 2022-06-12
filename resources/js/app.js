import ApexCharts from 'apexcharts'

// Generate chart
var degreeOptions = {
    chart: {
      height: 200,
      type: "radialBar",
      fontFamily: 'Bebas Neue'
    },
  
    series: [78.56],
    colors: ["#5900D7"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 4,
          size: "75%",
          background: "#F1E9FD"
        },
        track: {
          background: "#F1E9FD"

        },
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
            },
            plotOptions: {
                radialBar: {
                  hollow: {
                    size: "65%",
                  }
                }
            }
        },
    }],


  };
  
  var degreeChart = new ApexCharts(document.querySelector("#degreeChart"), degreeOptions);
  
  degreeChart.render();
  

  // Skills chart
  var skillsOptions = {
    series: [{
    name: 'Confidence',
    data: [80, 80, 65, 75, 85, 85, 90, 100]
  }],
  chart: {
        type: 'bar',
        height: 350,
        fontFamily: 'Bebas Neue',
        range: 7
  },
  colors: ["#5900D7"],
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Wordpress', 'Shopify', 'Laravel', 'js', 'css', 'html', 'Problem Solving', 'Picking up new skills'],
    range: 4
  },
  yaxis: {
    title: {
      text: 'Confidence'
    },
    labels: {
        style: {
            fontSize: '14px',
        },
        formatter: function (value) {
            return value;
        }
    },
    min: 0,
    max: 100,
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " / 100"
      }
    }
  }
  };

  var skillsChart = new ApexCharts(document.querySelector("#skillsChart"), skillsOptions);
  skillsChart.render();

