import React from 'react';
import CoreAppNav from './core-app-nav';
import CoreAppTitle from './core-app-title';
import {AppDrawer} from '/client/modules/ui-components';
import {useDeps} from '/client/libs/mantra';


const depsToAppDrawer = () => ({
  appTitle: React.createElement(CoreAppTitle, {position: 'app-drawer'}),
  appNav: React.createElement(CoreAppNav, {position: 'app-drawer'})
});

export default useDeps(depsToAppDrawer)(AppDrawer);
