// import React from 'react';
import {Main} from '/client/modules/ui-components-v2';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const MainCtx = injectDeps(Main);

  FlowRouter.route('/interactive-maps', {
    name: 'interactive-maps.root',
    action() {
      mount(MainCtx, {});
    }
  });
};
