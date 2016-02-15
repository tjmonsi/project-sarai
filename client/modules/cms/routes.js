import React from 'react';
import {Landing} from '/client/modules/ui-components';
import CmsRootContent from './containers/cms-root-content';
import CmsCropContent from './containers/cms-crop-content';
import {CoreAppBar, CoreAppDrawer, CoreFooter, coreLib} from '/client/modules/core';
// const {authenticate} = coreLib;

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const LandingCtx = injectDeps(Landing);
  const module = 'cms';

  FlowRouter.route('/cms', {
    name: 'cms.root',
    action(params, query) {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar, {module}),
        appDrawer: React.createElement(CoreAppDrawer, {position: 'app-drawer', module}),
        content: React.createElement(CmsRootContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/cms/:crop', {
    name: 'cms.crop',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar, {module}),
        appDrawer: React.createElement(CoreAppDrawer, {position: 'app-drawer', module}),
        content: React.createElement(CmsCropContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/cms/blog/:id', {
    name: 'cms.blog',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar, {module}),
        appDrawer: React.createElement(CoreAppDrawer, {position: 'app-drawer', module}),
        content: React.createElement(CmsCropContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/cms/page/:id', {
    name: 'cms.page',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar, {module}),
        appDrawer: React.createElement(CoreAppDrawer, {position: 'app-drawer', module}),
        content: React.createElement(CmsCropContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });
};
