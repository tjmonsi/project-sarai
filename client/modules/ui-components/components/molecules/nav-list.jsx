import React from 'react';
import NavLink from './../atoms/nav-link.jsx';
import LoginNav from './../atoms/login-nav.jsx';
import classNames from 'classnames';

class NavList extends React.Component {
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
  renderNavs() {
    const {navs, linksClassList} = this.props;
    return navs.map((nav, key) => {
      return (
        <NavLink
          classList = {linksClassList}
          href = {nav.link}
          id = {nav.id}
          key = {key}
          label = {nav.label}
          links = {nav.links}
        />
      );
    });
  }
  render() {
    const {position, classList} = this.props;
    const basicClass = 'mdl-navigation';
    const className = (position === 'app-bar') ?
      classNames(basicClass, 'mdl-layout--large-screen-only', classList) :
      classNames(basicClass, classList);
    return (
      <nav className={className}>
        {this.renderNavs()}
        <LoginNav />
      </nav>
    );
  }
}

NavList.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  linksClassList: React.PropTypes.arrayOf(React.PropTypes.string),
  navs: React.PropTypes.arrayOf(React.PropTypes.shape({
    link: React.PropTypes.string,
    label: React.PropTypes.string
  })),
  position: React.PropTypes.string
};

NavList.defaultProps = {
  classList: [],
  linksClassList: [],
  navs: [],
  position: null
};

export default NavList;
