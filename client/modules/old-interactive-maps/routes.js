import React from 'react';
import {Main, SectionList} from '/client/modules/ui-components-v2';
import SuitabilityMap from './components/suitability-maps.jsx';
import {coreLib, CoreNavList, CoreBanner} from '/client/modules/core-v2';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const {triggerAuthenticate, appBarTitle, appDrawerTitle, coreLayout} = coreLib;
  const layout = coreLayout('core', appBarTitle, appDrawerTitle, true, CoreNavList);
  const MainCtx = injectDeps(Main);

  FlowRouter.route('/interactive-maps', {
    name: 'interactive-maps.root',
    triggersEnter: [triggerAuthenticate],
    action() {
      mount(MainCtx, Object.assign({}, layout, {
        content: () => (React.createElement(SectionList, {
          displayName: 'SectionList',
          spacing: false,
          sections: [
            // () => (React.createElement(CoreBanner, {
            //   displayName: 'CoreBanner',
            //   path: this.name
            // })),
            () => (React.createElement(SuitabilityMap, {
              displayName: 'SuitabilityMap'
            }))
          ]
        }))
      }));
    }
  });
};
