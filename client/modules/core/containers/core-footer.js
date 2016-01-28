import React from 'react';
import CoreAppNav from './core-app-nav';
import CoreAppTitle from './core-app-title';
import {AppBar} from '/client/modules/ui-components';
import {useDeps} from '/client/libs/mantra';


const depsToAppBar = () => ({
  appTitle: React.createElement(CoreAppTitle),
  appNav: React.createElement(CoreAppNav, {position: 'app-bar'})
});

export default useDeps(depsToAppBar)(AppBar);
