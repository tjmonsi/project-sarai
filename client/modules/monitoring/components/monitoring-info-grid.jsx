import React from 'react';

import {HighChart} from '/client/modules/eskwela';

class MonitoringInfoGrid extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  render() {
    /*STORE THIS IN DB LATER*/
    const yield_gap_data_1 = {

        chart: {
            type: 'column'
        },

        title: {
            text: 'Difference between simulated (potential) yield of the varieties (using the DSSAT program) at different Nitrogen levels and maximum attainable yield'
        },

        xAxis: {
            categories: ['90 N kg/ha', '135 N kg/ha', '180 N kg/ha'],
            labels: {
                style: {
                    fontSize: '17px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Yield in kg/ha'
            },
            labels: {
                style: {
                    fontSize: '17px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                
            }
        },

        series: [{
            name: 'NSIC Rc238',
            data: [1936, 28,  1115]
        }, {
            name: 'NSIC Rc300',
            data: [1212, 696, 558]
        }, {
            name: 'PSB Rc18',
            data: [3228, 733, 483]
        }, {
            name: 'NSIC Rc222',
            data: [2411, 1464, 952]
        }, {
            name: 'Mestizo 19',
            data: [3961, 1183, 595]
        }]
    }

    const yield_gap_data_2 = {

        chart: {
            type: 'column'
        },

        title: {
            text: 'Difference between maximum attainable yield of the varieties and observed farm yield (optimum condition) at different Nitrogen levels'
        },

        xAxis: {
            categories: ['90 N kg/ha', '135 N kg/ha', '180 N kg/ha'],
            labels: {
                style: {
                    fontSize: '17px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Yield in kg/ha'
            },
            labels: {
                style: {
                    fontSize: '17px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                
            }
        },

        series: [{
            name: 'NSIC Rc238',
            data: [1360,  1025, 734]
        }, {
            name: 'NSIC Rc300',
            data: [3433,  2613, 2794]
        }, {
            name: 'PSB Rc18',
            data: [1814,  508,  209]
        }, {
            name: 'NSIC Rc222',
            data: [2460,  1945, 1183]
        }, {
            name: 'Mestizo 19',
            data: [2142,  2231, 1409]
        }]
    }



    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--1-offset mdl-cell--10-col">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col">
              <div>
                <i className="help-options material-icons">help</i>
              </div>
              <img className="monitoring-infographic" src="images/monitoring/infographics/yield_gap.png" />
            </div>
            <div className="mdl-cell mdl-cell--6-col">
                
                    <h4>Maximum attainable yield - the rice yield of experimental/on-farm plots with no physical, biological or economic constraints and with the best-known management practices for a given time and in a given ecology;</h4>
                    <h4>Farm-level yield - the average farmer’s yield in a given target area at a given time and in a given ecology</h4>

                
              
                
              <h4>               
                 Yield gap is the difference between the max attainable yield and the farm level yield.
                </h4>
                (Roetter et al., 1998)
            
                

            </div>
          </div>
        </div>

        <div className="mdl-cell mdl-cell--1-offset mdl-cell--10-col monitoring-hr">
          <hr />
        </div>

        <div className="mdl-cell mdl-cell--1-offset mdl-cell--10-col">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col">
              <i className="material-icons">help</i>
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <i className="material-icons">help</i>
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <HighChart id = {'chart1'}
                chartData = {yield_gap_data_1}
              />

            </div>
            <div className="mdl-cell mdl-cell--6-col">
              
              <HighChart id = {'chart2'}
                chartData = {yield_gap_data_2}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default MonitoringInfoGrid;