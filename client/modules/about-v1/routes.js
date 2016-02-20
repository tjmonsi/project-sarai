import React from 'react';
import {Main, SectionList} from '/client/modules/ui-components-v2';
import {coreLib, CoreNavList, CoreBanner} from '/client/modules/core-v2';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const MainCtx = injectDeps(Main);
  const {triggerAuthenticate, appBarTitle, appDrawerTitle, coreLayout} = coreLib;
  const layout = coreLayout('core', appBarTitle, appDrawerTitle, true, CoreNavList);

  FlowRouter.route('/about', {
    name: 'core.about',
    triggersEnter: [triggerAuthenticate],
    action() {
      mount(MainCtx, Object.assign({}, layout, {
        content: () => (React.createElement(SectionList, {
          displayName: 'SectionList',
          spacing: false,
          sections: [
            () => (React.createElement(CoreBanner, {
              displayName: 'CoreBanner',
              path: this.name
            }))
          ]
        }))
      }));
    }
  });
};
