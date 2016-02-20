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
  render() {
    const {label, href, classList} = this.props;
    const className = classNames('mdl-navigation__link', classList);
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
  href: React.PropTypes.string,
  label: React.PropTypes.string
};

NavLink.defaultProps = {
  classList: [],
  href: '',
  label: 'Dead Link'
};

export default NavLink;
