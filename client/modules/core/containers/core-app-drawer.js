import React from 'react';
import CoreNav from './core-nav';
// import CoreAppNavDrawer from './core-app-nav-drawer';
import CoreAppTitle from './core-app-title';
import {AppDrawer} from '/client/modules/ui-components';
import {useDeps} from 'mantra-core';


const depsToAppDrawer = () => ({
  appTitle: React.createElement(CoreAppTitle, {position: 'app-drawer'}),
  appNav: React.createElement(CoreNav, {position: 'app-drawer'})
});

export default useDeps(depsToAppDrawer)(AppDrawer);
