import React from 'react';
import classNames from 'classnames';
import {FlowRouter} from 'meteor/kadira:flow-router';

class NavLink extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
    // add window event listener
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  checkLink(url) {
    return /^(f|ht)tps?:\/\//i.test(url);
  }
  renderDropdown(links) {
    return links.map((link, key) => {
      const {href, label} = link;
      const url = href.trim() === '' || this.checkLink(href.trim()) ? href : FlowRouter.path(href);
      return (
        <li
          className="mdl-menu__item"
          data-link-href={url}
          key={key}
        >
          <a href={url}>
            {label}
          </a>
        </li>
      );
    });
  }
  renderSecondary(links) {
    const {classList} = this.props;
    const className = classNames('mdl-navigation__link', classList);
    const style = {
      paddingLeft: 60
    };
    return links.map((link, key) => {
      const {href, label} = link;
      // const url = ''
      const url = href.trim() === '' || this.checkLink(href.trim()) ? href : FlowRouter.path(href);
      return (
        <a
          className={className}
          href={url}
          key={key}
          style={style}
        >
          {label}
        </a>
      );
    });
  }
  render() {
    const {label, id, links, href, classList, position, dropdownClassList} = this.props;
    const className = classNames('mdl-navigation__link', classList);
    const dropdownClassName = classNames('mdl-menu', 'mdl-menu--bottom-left',
      'mdl-js-menu', 'mdl-js-ripple-effect', 'nav-link-dropdown-v2', dropdownClassList);
    // const url = ''
    const url = href.trim() === '' || this.checkLink(href.trim()) ? href : FlowRouter.path(href);
    if (links && links.length > 0) {
      if (position === 'app-bar') {
        return (
          <span>
            <a
              className={className}
              href=""
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
            href=""
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
        href={url}
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
