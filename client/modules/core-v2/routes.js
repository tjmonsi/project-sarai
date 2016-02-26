import React from 'react';
import CoreNavList from './containers/core-nav-list';
import CoreRootBanner from './containers/core-banner';
import CoreRootServices from './containers/core-root-services';
import SaraiPartners from './components/sarai-partners.jsx';
import {Main, SectionList} from '/client/modules/ui-components-v2';
import lib from './lib';

export default (injectDeps, context) => {
  const {FlowRouter, mount, Meteor} = context;
  const MainCtx = injectDeps(Main);
  const {triggerAuthenticate, appBarTitle, appDrawerTitle, coreLayout} = lib;
  const layout = coreLayout('core', appBarTitle, appDrawerTitle, true, CoreNavList);

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
              displayName: 'CoreRootBanner',
              path: this.name
            })),
            // function() {
            //   return React.createElement(...) 
            // }

            // () => {
            //   return React.createElement(...) 
            // }

            // () => (React.createElement(...))
            () => (React.createElement(CoreRootServices, {
              displayName: 'CoreRootServices'
            })),
            () => (React.createElement(SaraiPartners, {
              displayName: 'SaraiPartners'
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
