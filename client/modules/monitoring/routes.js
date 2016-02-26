import React from 'react';

import {Landing} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer, CoreFooter} from '/client/modules/core';

import MonitoringRootContent from './containers/monitoring-root-content';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(Landing);

  FlowRouter.route('/monitoring', {
    name: 'monitoring.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(CoreAppDrawer),
        content: React.createElement(MonitoringRootContent)
      });
    }
  });
};