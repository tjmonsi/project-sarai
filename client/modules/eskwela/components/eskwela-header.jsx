import React from 'react';
import classNames from 'classnames';

class EskwelaHeader extends React.Component {
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
    const {headerText} = this.props;

    return (
      <div>
        <div className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col-desktop mdl-cell--1-offset-tablet mdl-cell--10-col-tablet mdl-cell--12-col-phone center">
          <h3>{headerText}</h3>
        </div>
      </div>
    );
  }
}

// SectionList.propTypes = {
//   classList: React.PropTypes.arrayOf(React.PropTypes.string),
//   sections: React.PropTypes.arrayOf(React.PropTypes.element),
//   spacing: React.PropTypes.bool
// };

// SectionList.defaultProps = {
//   classList: [],
//   sections: [],
//   spacing: true
// };

export default EskwelaHeader;
