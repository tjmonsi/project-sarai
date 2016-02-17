import React from 'react';
import CoreNavList from './containers/core-nav-list';
import CoreRootBanner from './containers/core-root-banner';
import CoreRootServices from './containers/core-root-services';
import {Main, AppBar, AppDrawer,
  AppTitle, AppLogo, SectionList} from '/client/modules/ui-components-v2';
import lib from './lib';

export default (injectDeps, context) => {
  const {FlowRouter, mount, Meteor} = context;
  const MainCtx = injectDeps(Main);
  const {triggerAuthenticate} = lib;

  const appBarTitle = () => (React.createElement(AppTitle, {
    displayName: 'AppTitle',
    title: () => (React.createElement(AppLogo, {
      displayName: 'AppLogo',
      src: '/images/sarai-white.png'
    })),
    href: FlowRouter.path('core.root')
  }));

  const appDrawerTitle = () => (React.createElement(AppTitle, {
    displayName: 'AppTitle',
    title: () => (React.createElement(AppLogo, {
      displayName: 'AppLogo',
      src: '/images/sarai.png'
    })),
    href: FlowRouter.path('core.root')
  }));

  const layout = {
    appBar: () => (React.createElement(AppBar, {
      displayName: 'AppBar',
      appTitle: appBarTitle,
      appNav: () => (React.createElement(CoreNavList, {
        displayName: 'CoreNavList',
        module: 'core',
        position: 'app-bar'
      }))
    })),
    appDrawer: () => (React.createElement(AppDrawer, {
      displayName: 'AppBar',
      appTitle: appDrawerTitle,
      appNav: () => (React.createElement(CoreNavList, {
        displayName: 'CoreNavList',
        module: 'core',
        position: 'app-drawer'
      }))
    }))
  };

  FlowRouter.route('/', {
    name: 'core.root',
    triggersEnter: [triggerAuthenticate],
    action() {
      mount(MainCtx, Object.assign({}, layout, {
        content: () => (React.createElement(SectionList, {
          displayName: 'SectionList',
          spacing: false,
          sections: [
            () => (React.createElement(CoreRootBanner, {
              displayName: 'CoreRootBanner'
            })),
            () => (React.createElement(CoreRootServices, {
              displayName: 'CoreRootServices'
            }))
          ]
        }))
      }));
    }
  });

  FlowRouter.route('/login', {
    name: 'core.login',
    action(params, queryParams) {
      Meteor.loginWithPassword('tester', 'tester', (err) => {
        if (err) {
          // handle error;
          // console.log(err);
        } else {
          if (queryParams.redirect) FlowRouter.go(queryParams.redirect);
          else FlowRouter.go('core.root');
        }
      });
    }
  });

  FlowRouter.route('/logout', {
    name: 'core.logout',
    action(params, queryParams) {
      Meteor.logout((err) => {
        if (err) {
          // handle error;
          // console.log(err);
        } else {
          if (queryParams.redirect) FlowRouter.go(queryParams.redirect);
          else FlowRouter.go('core.root');
        }
      });
    }
  });
};
