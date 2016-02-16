import React from 'react';
import classNames from 'classnames';

class NavLink extends React.Component {
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
  renderDropdown(links) {
    return links.map((link, key) => {
      const {href, label} = link;
      return (
        <li
          className="mdl-menu__item"
          data-link-href={href}
          key={key}
        >
          <a href={href}>
            {label}
          </a>
        </li>
      );
    });
  }
  renderSecondary(links) {
    const {classList} = this.props;
    const className = classNames('mdl-navigation__link', classList);
    return links.map((link, key) => {
      const {href, label} = link;
      return (
        <a
          className={className}
          href={href}
          key={key}
        >
          {`- ${label}`}
        </a>
      );
    });
  }
  render() {
    const {label, id, links, href, classList, position, dropdownClassList} = this.props;
    const className = classNames('mdl-navigation__link', classList);
    const dropdownClassName = classNames('mdl-menu', 'mdl-menu--bottom-left',
      'mdl-js-menu', 'mdl-js-ripple-effect', 'nav-link-dropdown-v2', dropdownClassList);
    if (links && links.length > 0) {
      if (position === 'app-bar') {
        return (
          <span>
            <a
              className={className}
              href=''
              id={id}
            >
              {label}
            </a>
            <ul
              className={dropdownClassName}
              htmlFor={id}
            >
              {this.renderDropdown(links)}
            </ul>
          </span>
        );
      }
      return (
        <span>
          <a
            className={className}
            href=''
          >
            {label}
          </a>
          {this.renderSecondary(links)}
        </span>
      );
    }
    return (
      <a
        className={className}
        href={href}
      >
        {label}
      </a>
    );
  }
}

NavLink.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  dropdownClassList: React.PropTypes.arrayOf(React.PropTypes.string),
  href: React.PropTypes.string,
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    href: React.PropTypes.string,
    label: React.PropTypes.string
  })),
  position: React.PropTypes.string
};

NavLink.defaultProps = {
  classList: [],
  dropdownClassList: [],
  href: '',
  label: 'Dead Link',
  position: 'app-bar'
};

export default NavLink;
