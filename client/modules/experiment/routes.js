import React from 'react';
import {Landing} from '/client/modules/ui-components';
import FileUploader from './components/file-uploader.jsx';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(Landing);

  FlowRouter.route('/file-uploader-experiment', {
    action() {
      mount(LandingCtx, {
        content: React.createElement(FileUploader),
      });
    }
  });
};
