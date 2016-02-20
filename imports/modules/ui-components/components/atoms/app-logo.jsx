import React from 'react';
import classNames from 'classnames';

class AppTitle extends React.Component {
  render() {
    const {src, classList} = this.props;
    const className = classNames('app-logo', classList);
    return (
      <img
        className={className}
        src={src}
      />
    );
  }
}

AppTitle.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  src: React.PropTypes.string
};

AppTitle.defaultProps = {
  classList: [],
  src: '/images/sarai-white.png'
};

export default AppTitle;
