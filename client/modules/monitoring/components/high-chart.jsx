import React from 'react';
// import classNames from 'classnames';
import highcharts from 'highcharts';
// require('highcharts/modules/exporting')(highcharts);
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
    const {id, chartData} = this.props;

    if (componentHandler) {
      componentHandler.upgradeDom();
    }
    
    const idTemp = `#${id}`;

    $(idTemp).highcharts(chartData);
  }
  render() {
    // const className = classNames('mdl-layout-title', 'app-title', classList);
    const {id} = this.props;

    return (
      <div>
        <div
          
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
