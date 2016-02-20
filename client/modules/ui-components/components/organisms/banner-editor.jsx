import React from 'react';
import classNames from 'classnames';

class BannerEditor extends React.Component {
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
  renderBottom() {
    const {bottomSection} = this.props;
    if (bottomSection) {
      return (
        <div className="mdl-cell mdl-cell--12-col">
          <div className="bottom-section">
            {bottomSection}
          </div>
        </div>
      );
    }
  }
  render() {
    const {leftSection, rightSection, classList} = this.props;
    const className = classNames(classList);

    return (
      <div
        className={className}
      >
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col mdl-cell--bottom mdl-cell--8-col-tablet mdl-cell--4-col-phone">
            <div className="left-section">
              {leftSection}
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-cell--middle mdl-cell--8-col-tablet mdl-cell--4-col-phone">
            <div className="right-section">
              {rightSection}
            </div>
          </div>
          {this.renderBottom()}
        </div>
      </div>
    );
  }
}

BannerEditor.propTypes = {
  bottomSection: React.PropTypes.element,
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  leftSection: React.PropTypes.element,
  rightSection: React.PropTypes.element
};

BannerEditor.defaultProps = {
  background: '',
  leftSection: React.createElement('div'),
  rightSection: React.createElement('div'),
  classList: []
};

export default BannerEditor;
