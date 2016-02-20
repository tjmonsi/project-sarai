import React from 'react';
import classNames from 'classnames';

class AppDrawer extends React.Component {
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
    const className = classNames('mdl-layout__drawer', 'app-drawer', classList);
    return (
      <div className={className}>
        {appTitle}
        {appNav}
      </div>
    );
  }
}

AppDrawer.propTypes = {
  appNav: React.PropTypes.element,
  appTitle: React.PropTypes.element,
  classList: React.PropTypes.arrayOf(React.PropTypes.string)
};

AppDrawer.defaultProps = {
  appTitle: (<span className="mdl-layout-title">{'Title'}</span>),
  classList: []
};

export default AppDrawer;
