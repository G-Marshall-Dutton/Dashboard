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
  
  const degreeDarkMode = {
    colors: ["#48B7FC"],
    fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: ["#48B7FC"],
          stops: [0, 100]
        }
      },
      plotOptions: {
        radialBar: {
            hollow: {
              background: "#EFFAFF"
            },
            track: {
              background: "#212121"
    
            },
        }
    }

  }

  var degreeChart = new ApexCharts(document.querySelector("#degreeChart"), degreeOptions);
  
  degreeChart.render();
  

// Skills chart
const skillsOptions = {
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
      horizontal: false,
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
    range: 4,
    labels: {
        style: {
            fontSize: '14px',
                colors: ['#373d3f']
        }
    }
  },
  yaxis: {
    title: {
      text: 'Confidence',
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
  },
  responsive: [{
    breakpoint: 768,
    options: {
      plotOptions: {
        bar: {
          horizontal: true
        },
      },
      yaxis: {
        title: ''
      },
      xaxis: {
        title: 'Confidence'
      }
    }
  }]
};

  var skillsChart = new ApexCharts(document.querySelector("#skillsChart"), skillsOptions);
  skillsChart.render();

  const darkModeOptions = {
    colors: ['#48B7FC'],
    yaxis: {
        title: {
          text: 'Confidence',
          style: {
            color: '#e6e3e3'
          }
    
    
        },
    
        labels: {
            style: {
                fontSize: '14px',
                colors: ['#e6e3e3']
            },
            formatter: function (value) {
                return value;
            }
        },
        min: 0,
        max: 100,
      },
      xaxis: {
        labels: {
            style: {
                colors: ['#e6e3e3','#e6e3e3','#e6e3e3','#e6e3e3','#e6e3e3','#e6e3e3','#e6e3e3','#e6e3e3','#e6e3e3','#e6e3e3','#e6e3e3']
            }
        }
      }
  }


  let button = document.querySelector('.switch input')
  button.addEventListener('click', () => {
      let body = document.querySelector('body');
      body.classList.toggle("dark-mode");

      let skillOptions = body.classList.contains('dark-mode') ? darkModeOptions : skillsOptions
      let degreeOpts = body.classList.contains('dark-mode') ? degreeDarkMode : degreeOptions
      skillsChart.updateOptions(skillOptions, true)
      degreeChart.updateOptions(degreeOpts, true)
  })