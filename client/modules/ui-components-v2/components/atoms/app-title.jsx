import React from 'react';
import classNames from 'classnames';

class AppTitle extends React.Component {
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
    const {title, href, classList} = this.props;
    const className = classNames('mdl-layout-title', 'app-title', classList);
    return (
      <div className={className}>
        <a href={href}>
          {title}
        </a>
      </div>
    );
  }
}

AppTitle.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  href: React.PropTypes.string,
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ])
};

AppTitle.defaultProps = {
  classList: [],
  href: '/',
  title: 'Title'
};

export default AppTitle;
