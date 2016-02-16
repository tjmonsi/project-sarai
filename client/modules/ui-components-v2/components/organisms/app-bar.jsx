import React from 'react';
import classNames from 'classnames';

class AppBar extends React.Component {
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
    const {appTitle, appNav, classList} = this.props;
    const className = classNames('mdl-layout__header', 'app-bar-v2', classList);
    return (
      <header className={className}>
        <div className="mdl-layout__header-row">
          {appTitle}
          <div className="mdl-layout-spacer"></div>
          {appNav}
        </div>
      </header>
    );
  }
}

AppBar.propTypes = {
  appNav: React.PropTypes.element,
  appTitle: React.PropTypes.element,
  classList: React.PropTypes.arrayOf(React.PropTypes.string)
};

AppBar.defaultProps = {
  appTitle: (<span className="mdl-layout-title">{'Title'}</span>),
  classList: []
};

export default AppBar;
