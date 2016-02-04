import React from 'react';
import {Landing} from '/client/modules/ui-components';
// import Landing from '/client/modules/ui-components/templates/landing.jsx'
import CoreAppBar from './containers/core-app-bar';
import CoreAppDrawer from './containers/core-app-drawer';
import CoreRootContent from './containers/core-root-content';
import CoreFooter from './containers/core-footer';
// import MantraExample from './containers/mantra-example';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(Landing);

  FlowRouter.route('/', {
    name: 'core.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar), // (<CoreAppBar>)
        appDrawer: React.createElement(CoreAppDrawer),
        content: React.createElement(CoreRootContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  // FlowRouter.route('/example', {
  //   action() {
  //     mount(LandingCtx, {
  //       appBar: React.createElement(CoreAppBar),
  //       appDrawer: React.createElement(CoreAppDrawer),
  //       content: React.createElement(MantraExample)
  //     });
  //   }
  // });
};
