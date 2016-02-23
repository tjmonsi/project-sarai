import React from 'react';
import {MdlLanding} from '/client/modules/mdl-core-design';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const MdlLandingCtx = injectDeps(MdlLanding);
};
