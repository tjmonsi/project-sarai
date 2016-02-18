import React from 'react';
import {Main} from '/client/modules/ui-components-v2';
import GeotiffExperiment from './components/geotiff.jsx';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const MainCtx = injectDeps(Main);
  
  FlowRouter.route('/geotiff-experiment', {
    action() {
      mount(MainCtx, {
        content: () => (React.createElement(GeotiffExperiment))
      });
    }
  });

};
