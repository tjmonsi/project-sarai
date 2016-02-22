import React from 'react';
import classNames from 'classnames';
import {composeWithTracker} from 'mantra-core';
import {Meteor} from 'meteor/meteor';

class LoginNav extends React.Component {
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
    const {userId, loggingIn, classList} = this.props;
    const className = classNames('mdl-navigation__link', classList);
    if (!userId) {
      return (
        <a
          className={className}
          href='/login'
        >
          Login
        </a>
      );  
    } else if (loggingIn) {
      return (
        <span className={className} >
          Logging In...
        </span>
      );
    } else {
      return (
        <a
          className={className}
          href='/logout'
        >
          Logout
        </a>
      );
    }
  }
}

LoginNav.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  loggingIn: React.PropTypes.bool,
  userId: React.PropTypes.string
};

LoginNav.defaultProps = {
  classList: []
};

const composer = ({}, onData) => {
  
  const userId = Meteor.userId();
  const loggingIn = Meteor.loggingIn();
  onData(null, {userId, loggingIn});
}

export default composeWithTracker(composer)(LoginNav);
// export default LoginNav;
