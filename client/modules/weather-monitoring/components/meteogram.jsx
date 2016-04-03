import React from 'react';
import highcharts from 'highcharts/highstock';

class Meteogram extends React.Component {
  constructor() {
    super()
    this.getMeteogramOptions = this.getMeteogramOptions.bind(this);
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const meteogramID = `meteogram`;

    $('#meteogram').highcharts('StockChart', this.getMeteogramOptions())
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
        text: '10 Day Forecast',
        align: 'left'
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
                color: highcharts.getOptions().colors[0]
            }
          },
          title: {
            text: 'Temperature',
            style: {
                color: highcharts.getOptions().colors[0]
            }
          },
          opposite: false,
          gridLineWidth: 0
        },
        {
          labels: {
            format: '{value} mb',
            style: {
                color: highcharts.getOptions().colors[1]
            }
          },
          title: {
            text: 'Pressure',
            style: {
                color: highcharts.getOptions().colors[1]
            }
          },
          opposite: true,
          gridLineWidth: 0       
        },
        {
          labels: {
            format: '{value} %',
            style: {
                color: highcharts.getOptions().colors[2]
            }
          },
          title: {
            text: 'Chance of Rain',
            style: {
                color: highcharts.getOptions().colors[2]
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
          }
        }
      ],

      legend: {
        layout: 'vertical',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 55,
        floating: true,
        backgroundColor: (highcharts.theme && highcharts.theme.legendBackgroundColor) || '#FFFFFF'
      },

      series: [
        {
          name: 'Temperature',
          id: 'temperature',
          data: chartData.series.temperature,
          type: 'spline',
          tooltip: {
            valueDecimals: 1
          }
        },
        {
          name: 'Pressure',
          id: 'pressure',
          data: chartData.series.pressure,
          type: 'spline',
          yAxis: 1,
          xAxis: 1
        },
        {
          name: 'Chance of Rain',
          id: 'pop',
          data: chartData.series.pop,
          type: 'spline',
          yAxis: 2
        }
      ],

      tooltip: {
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

  render() {
    return (
      <div id="meteogram"/>
    )
  }
}

export default Meteogram;
