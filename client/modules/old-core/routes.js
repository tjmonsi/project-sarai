import React from 'react';
import {Landing} from '/client/modules/old-ui-components';
import CoreAppBar from './containers/core-app-bar';
import CoreAppDrawer from './containers/core-app-drawer';
import CoreRootContent from './containers/core-root-content';
import CoreFooter from './containers/core-footer';
import * as coreLib from './lib';
const {authenticate} = coreLib;

export default (injectDeps, context) => {
  const {FlowRouter, mount, Meteor} = context;
  const LandingCtx = injectDeps(Landing);

  FlowRouter.triggers.enter([authenticate])

  FlowRouter.route('/old', {
    name: 'core.old.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(CoreAppDrawer, {position: 'app-drawer'}),
        content: React.createElement(CoreRootContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });

  FlowRouter.route('/old/login', {
    name: 'core.old.login',
    action() {
      Meteor.loginWithPassword('tester', 'tester', (err) => {
        if (err) console.log(err)
        else {
          FlowRouter.go('/');
        }
      })
    }
  })

  FlowRouter.route('/old/logout', {
    name: 'core.old.logout',
    action() {
      Meteor.logout((err) => {
        if (err) console.log(err)
        else {
          FlowRouter.go('/');
        }
      });
    }
  })
};
