import React from 'react';
import {Landing} from '/client/modules/ui-components';
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

  FlowRouter.route('/', {
    name: 'core.root',
    action() {
      mount(LandingCtx, {
        appBar: React.createElement(CoreAppBar),
        appDrawer: React.createElement(CoreAppDrawer, {position: 'app-drawer'}),
        content: React.createElement(CoreRootContent),
        footer: React.createElement(CoreFooter)
      });
    }
  });
  
  FlowRouter.route('/login', {
    name: 'core.login',
    action() {
      Meteor.loginWithPassword('tester', 'tester', (err) => {
        if (err) console.log(err)
        else {
          FlowRouter.go('/');
        }
      })
    }
  })
  
  FlowRouter.route('/logout', {
    name: 'core.logout',
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
