import React from 'react';

import {Landing} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer, CoreFooter} from '/client/modules/core';

import EskwelaRootContent from './containers/eskwela-root-content';
import EskwelaTNAContent from './containers/eskwela-tna-content';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(Landing);

  FlowRouter.route('/eskwela', {
    name: 'sarai-eskwela.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(CoreAppDrawer),
        content: React.createElement(EskwelaRootContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/eskwela/tna', {
    name: 'sarai-eskwela.tna',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(CoreAppDrawer),
        content: React.createElement(EskwelaTNAContent),
        footer: React.createElement(CoreFooter),
      });
    }
  });
};
