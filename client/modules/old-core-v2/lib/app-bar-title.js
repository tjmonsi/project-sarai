import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {AppTitle, AppLogo} from '/client/modules/old-ui-components-v2';

export default () => (React.createElement(AppTitle, {
  displayName: 'AppTitle',
  title: () => (React.createElement(AppLogo, {
    displayName: 'AppLogo',
    src: '/images/sarai-white.png'
  })),
  href: FlowRouter.path('core.root')
}));
