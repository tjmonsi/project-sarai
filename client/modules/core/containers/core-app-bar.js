import React from 'react';
// import CoreAppNav from './core-app-nav';
import CoreNav from './core-nav';
import CoreAppTitle from './core-app-title';
import {AppBar} from '/client/modules/ui-components';
import {useDeps} from 'mantra-core';


const depsToAppBar = () => ({
  appTitle: React.createElement(CoreAppTitle, {position: 'app-bar'}),
  appNav: React.createElement(CoreNav, {position: 'app-bar'})
});

// function depsToAppBar (context, actions) {
//  return {
//    appTitle: (<CoreAppTitle position = 'app-bar'),
//    appNav: (<CoreAppNav position = 'app-bar')
//  }
// }

export default useDeps(depsToAppBar)(AppBar);
