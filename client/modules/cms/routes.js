import React from 'react';
import {Landing} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer, CoreFooter} from '/client/modules/core';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(Landing);
  const module = 'cms';

  FlowRouter.route('/cms', {
    name: 'cms.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar, {module}),
        appDrawer: React.createElement(CoreAppDrawer, {position: 'app-drawer', module}),
        footer: React.createElement(CoreFooter)
      });
    }
  });
};
