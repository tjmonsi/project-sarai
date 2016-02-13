import {AppDrawer} from '/client/modules/ui-components';
import {composerApp} from './core-app-bar';
import {composeAll, compose, useDeps} from 'mantra-core';

export default composeAll(
  compose(composerApp),
  useDeps()
)(AppDrawer);
