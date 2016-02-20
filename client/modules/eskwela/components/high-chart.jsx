import React from 'react';
// import classNames from 'classnames';
import highcharts from 'highcharts';
require('highcharts/modules/exporting')(highcharts);
require('highcharts/modules/drilldown')(highcharts);

class HighChart extends React.Component {
  componentDidMount() {
    const {id, chartData} = this.props;

    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const idTemp = `#${id}`;

    $(idTemp).highcharts(chartData);
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  render() {
    // const className = classNames('mdl-layout-title', 'app-title', classList);
    const {id} = this.props;

    return (
      <div>
        <div
          className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col-desktop
            mdl-cell--1-offset-tablet mdl-cell--10-col-tablet mdl-cell--12-col-phone"
          id={id}
        >
        </div>
      </div>
    );
  }
}

HighChart.propTypes = {
  chartData: React.PropTypes.object,
  id: React.PropTypes.string
};

export default HighChart;
