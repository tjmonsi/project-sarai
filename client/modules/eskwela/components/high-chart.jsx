import React from 'react';
import classNames from 'classnames';
import highcharts from 'highcharts';

class HighChart extends React.Component {
  componentDidMount() {
    const {text, id, chartData} = this.props;

    if (componentHandler) {
      componentHandler.upgradeDom();  
    }

    const id_temp = '#' + id;

    $(id_temp).highcharts(chartData);
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  render() {
    // const className = classNames('mdl-layout-title', 'app-title', classList);
    const {text, id} = this.props;

    return (
      <div>
        <div className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col-desktop mdl-cell--1-offset-tablet mdl-cell--10-col-tablet mdl-cell--12-col-phone" id={id}></div>
      </div>
    );
  }
}

// AppTitle.propTypes = {
//   classList: React.PropTypes.arrayOf(React.PropTypes.string),
//   title: React.PropTypes.oneOfType([
//     React.PropTypes.string,
//     React.PropTypes.element
//   ])
// };

// AppTitle.defaultProps = {
//   classList: [],
//   title: 'Title'
// };

export default HighChart;
