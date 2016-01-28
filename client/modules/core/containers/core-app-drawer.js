import React from 'react';
import CoreAppNavDrawer from './core-app-nav-drawer';
import CoreAppTitle from './core-app-title';
import {AppDrawer} from '/client/modules/ui-components';
import {useDeps} from '/client/libs/mantra';


const depsToAppDrawer = () => ({
  appTitle: React.createElement(CoreAppTitle, {position: 'app-drawer'}),
  appNav: React.createElement(CoreAppNavDrawer, {position: 'app-drawer'})
});

export default useDeps(depsToAppDrawer)(AppDrawer);
