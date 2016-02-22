import React from 'react';
import {Main, SectionList} from '/client/modules/ui-components-v2';
import {coreLib, CoreNavList, CoreBanner} from '/client/modules/core-v2';
import AboutComponent from './component/about.jsx';
import TeamComponent from './component/team.jsx';
import PartnersComponent from './component/partners.jsx';

export default (injectDeps, context) => {
  const {FlowRouter, mount} = context;
  const MainCtx = injectDeps(Main);
  const {triggerAuthenticate, appBarTitle, appDrawerTitle, coreLayout} = coreLib;
  const layout = coreLayout('core', appBarTitle, appDrawerTitle, true, CoreNavList);

  FlowRouter.route('/about', {
    name: 'about.root',
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
            })),
            () => (React.createElement(AboutComponent, {
              displayName: 'AboutComponent'
            }))
          ]
        }))
      }));
    }
  });

  FlowRouter.route('/about-partner-institutions', {
    name: 'about.partner',
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
            })),
            () => (React.createElement(PartnersComponent, {
              displayName: 'PartnersComponent'
            }))
          ]
        }))
      }));
    }
  });

  FlowRouter.route('/about-the-team', {
    name: 'about.team',
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
            })),
            () => (React.createElement(TeamComponent, {
              displayName: 'TeamComponent'
            }))
          ]
        }))
      }));
    }
  });
};
