import React from 'react';
import {AppTitle, AppLogo} from '/client/modules/old-ui-components';
import {composeAll, compose, useDeps} from 'mantra-core';

const composer = ({position}, onData) => {
  const title = ( position === 'app-bar' ) ?
    React.createElement(AppLogo, {
      src: '/images/sarai-white.png'
    }) :
    React.createElement(AppLogo, {
      src: '/images/sarai.png'
    });
  onData(null, {title});
};

export default composeAll(
  compose(composer),
  useDeps(),
)(AppTitle);
