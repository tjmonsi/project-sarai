import React from 'react';
import CoreFooter from './../containers/core-footer';
import {AppBar, AppDrawer} from '/client/modules/old-ui-components-v2';

export default (module, appBarTitle, appDrawerTitle, footerFlag, navList) => {
  const footer = footerFlag ? () => (React.createElement(CoreFooter, {
    displayName: 'CoreFooter'
  })) : null;

  return {
    appBar: () => (React.createElement(AppBar, {
      displayName: 'AppBar',
      appTitle: appBarTitle,
      appNav: () => (React.createElement(navList, {
        displayName: 'LayoutNavList',
        module: module,
        position: 'app-bar'
      }))
    })),
    appDrawer: () => (React.createElement(AppDrawer, {
      displayName: 'AppBar',
      appTitle: appDrawerTitle,
      appNav: () => (React.createElement(navList, {
        displayName: 'LayoutNavList',
        module: module,
        position: 'app-drawer'
      }))
    })),
    footer
  };
};
