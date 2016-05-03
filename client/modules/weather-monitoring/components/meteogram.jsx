import React from 'react';
import highcharts from 'highcharts/highstock';

class Meteogram extends React.Component {
  constructor() {
    super()
    this.getMeteogramOptions = this.getMeteogramOptions.bind(this);
    this.drawIcons = this.drawIcons.bind(this);
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const meteogramID = `meteogram`;

    $('#meteogram').highcharts(
      'StockChart',
      this.getMeteogramOptions(),
      function (chart) {
        // meteogram.onChartLoad(chart);
        console.log("Finished rendering chart...")
        // this.drawIcons();
      });
  }

  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  getMeteogramOptions() {
    const {chartData} = this.props;

    return {
      title: {
        text: 'Detailed 10-Day Forecast',
        align: 'left',
        style: {
          fontWeight: 'bold'
        }
      },

      rangeSelector: {
        enabled: false
      },

      navigator: {
        enabled: false
      },

      yAxis: [
        {
          labels: {
            format: '{value}°C',
            style: {
                color: '#ff1a1a',
                fontWeight: 'bold'
            }
          },
          title: {
            text: 'Temperature',
            style: {
                color: '#ff1a1a',
                fontWeight: 'bold'
            }
          },
          opposite: false,
          gridLineWidth: 0
        },
        {
          labels: {
            format: '{value} mb',
            style: {
                color: highcharts.getOptions().colors[1],
                fontWeight: 'bold'
            }
          },
          title: {
            text: 'Pressure',
            style: {
                color: highcharts.getOptions().colors[1],
                fontWeight: 'bold'
            }
          },
          opposite: true,
          gridLineWidth: 0
        },
        {
          labels: {
            format: '{value} %',
            style: {
                color: '#0066cc',
                fontWeight: 'bold'
            }
          },
          title: {
            text: 'Chance of Rain',
            style: {
                color: '#0066cc',
                fontWeight: 'bold'
            }
          },
          opposite: true,
          gridLineWidth: 0
        }
      ],

      xAxis: [
        {
          // plotLines: [{
          //   color: '#FF0000', // Red
          //   width: 2,
          //   value: Date.UTC(2016, 4, 3, 9) // Position, you'll have to translate this to the values on your x axis
          // }],
          gridLineWidth: 1,
          tickPosition: 'inside',
          tickPositions: chartData.tickPositions,
          labels: {
            enabled: false
          }
        },
        {
          tickPositions: chartData.altTickPositions,
          tickWidth: 0,
          opposite: true,
          labels: {
            formatter: function () {
              var s = highcharts.dateFormat('%e %b', new Date(this.value));

              return s;
            }
          },
          linkedTo: 0
        }
      ],

      legend: {
        enabled: true,
        layout: 'horizontal',
        align: 'left',
        x: 100,
        verticalAlign: 'top',
        y: 70,
        floating: true,
        backgroundColor: (highcharts.theme && highcharts.theme.legendBackgroundColor) || '#FFFFFF'
      },

      series: [
        {
          name: 'Temperature',
          id: 'temperature',
          data: chartData.series.temperature,
          type: 'spline',
          xAxis: 0,
          tooltip: {
            valueDecimals: 1
          },
          color: '#ff1a1a'
        },
        {
          name: 'Pressure',
          id: 'pressure',
          data: chartData.series.pressure,
          type: 'spline',
          yAxis: 1,
          xAxis: 0,
          color: highcharts.getOptions().colors[1],
          visible: false
        },
        {
          name: 'Chance of Rain',
          id: 'pop',
          data: chartData.series.pop,
          type: 'spline',
          yAxis: 2,
          xAxis: 0,
          color: '#0066cc'
        }
      ],

      tooltip: {
        borderColor: '#cccccc',
        formatter: function () {
          var s = '<b>' + highcharts.dateFormat('%e %b - %H:00', new Date(this.x)) + '</b>';

          s += '<br />' + this.points[0].series.name + ': ' + this.points[0].y + ' °C';
          s += '<br />' + this.points[1].series.name + ': ' + this.points[1].y + ' mb';
          s += '<br />' + this.points[2].series.name + ': ' + this.points[2].y + '%';


          // $.each(this.points, function () {
          //     s += '<br/>' + this.series.name + ': ' + this.y + 'm';
          // });

          return s;
        },
        shared: true
      },
    }

  }

  drawIcons() {
    const meteogram = this
  }

  render() {
    return (
      <div id="meteogram"/>
    )
  }
}

export default Meteogram;
