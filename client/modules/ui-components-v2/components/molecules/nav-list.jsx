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
  renderEdit() {
    const {edit, linksClassList} = this.props;
    if (edit) {
      return (
        <NavLink
          classList = {linksClassList}
          href = ''
          id = 'edit-app-menu'
          label = 'Edit Menu'
        />
      );
    }
  }
  renderNavs() {
    const {navs, linksClassList, position} = this.props;
    return navs.map((nav, key) => {
      return (
        <NavLink
          classList = {linksClassList}
          href = {nav.link}
          id = {nav.id}
          key = {key}
          label = {nav.label}
          links = {nav.links}
          position = {position}
        />
      );
    });
  }
  render() {
    const {login, logout, position, classList} = this.props;
    const basicClass = 'mdl-navigation';
    const className = (position === 'app-bar') ?
      classNames(basicClass, 'mdl-layout--large-screen-only', classList) :
      classNames(basicClass, classList);
    return (
      <nav className={className}>
        {this.renderNavs()}
        {this.renderEdit()}
        <LoginNav
          login = {login}
          logout = {logout}
        />
      </nav>
    );
  }
}

NavList.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  edit: React.PropTypes.bool,
  editCallback: React.PropTypes.func,
  linksClassList: React.PropTypes.arrayOf(React.PropTypes.string),
  login: React.PropTypes.string,
  logout: React.PropTypes.string,
  navs: React.PropTypes.arrayOf(React.PropTypes.shape({
    link: React.PropTypes.string,
    label: React.PropTypes.string
  })),
  position: React.PropTypes.string
};

NavList.defaultProps = {
  classList: [],
  edit: false,
  editCallback: () => null,
  linksClassList: [],
  navs: [],
  position: null
};

export default NavList;
