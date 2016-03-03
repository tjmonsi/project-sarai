import React from 'react';

import {Main, SectionList} from '/client/modules/ui-components-v2';

import MonitoringRootContent from './containers/monitoring-root-content';
import {coreLib} from '/client/modules/core-v2';
import CoreNavList from '/client/modules/core-v2/containers/core-nav-list';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const MainCtx = injectDeps(Main);
  const {appBarTitle, appDrawerTitle, coreLayout} = coreLib;
  const layout = coreLayout('core', appBarTitle, appDrawerTitle, true, CoreNavList);
  // FlowRouter.route('/monitoring', {
  //   name: 'monitoring.root',
  //   action() {
  //     mount(LandingCtx, {
  //       appBar: React.createElement(CoreAppBar),
  //       //appDrawer: React.createElement(CoreAppDrawer),
  //       content: React.createElement(MonitoringRootContent)
  //       // footer: React.createElement(CoreFooter)
  //     });
  //   }
  // });

  FlowRouter.route('/monitoring', {
    name: 'monitoring.root',
    action() {
      mount(MainCtx, Object.assign({}, layout, {
        content: () => (React.createElement(
          MonitoringRootContent
          ))
      }));
    }
  });
};