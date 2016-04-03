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
      rangeSelector : {
        selected : 0
      },

      title: {
        text: '10 Day Forecast',
        align: 'left'
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
        }
      ],

      xAxis: {
        // plotLines: [{
        //   color: '#FF0000', // Red
        //   width: 2,
        //   value: Date.UTC(2016, 4, 3, 9) // Position, you'll have to translate this to the values on your x axis
        // }],
        gridLineWidth: 1,
        tickPositions: chartData.tickPositions
      },

      series: [
        {
          name: 'Temperature',
          data: chartData.series.temperature,
          type: 'spline',
          tooltip: {
              valueDecimals: 2
          }
        },
        {
          name: 'Pressure',
          data: chartData.series.pressure,
          type: 'spline',
          yAxis: 1
        }
      ]
    }

  }

  render() {
    return (
      <div id="meteogram"/>
    )
  }
}

export default Meteogram;
