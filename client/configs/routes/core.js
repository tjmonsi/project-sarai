import React from 'react';
import {Landing} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer, CoreRootContent, CoreFooter} from '/client/modules/core';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(Landing);

  FlowRouter.route('/', {
    name: 'core.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(CoreAppDrawer),
        content: React.createElement(CoreRootContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });
};
