import React from 'react';
import CoreRootBanner from './core-root-banner';
import RootBannerEditor from './core-root-banner-editor';
import CoreRootTriSection from './core-root-tri-section';
import SaraiPartners from './../components/sarai-partners.jsx';
import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

const composerLandingPage = ({context, edit}, onData) => {
  const {Meteor, Collections} = context();
  const {LandingData} = Collections;
  const sections = [];
  const spacing = false;

  if (Meteor.subscribe('landing-page', 'core.root').ready()) {
    const landingData = LandingData.findOne();
    if (landingData) {
      if (landingData.banner) {
        sections.push(React.createElement(CoreRootBanner, {
          banner: landingData.banner
        }));
        
        if (FlowRouter.getQueryParam('edit') === 'true' && Meteor.user()) {
          sections.push(React.createElement(RootBannerEditor, {
            banner: landingData.banner
          }));
        }
      }
      
      if (landingData.services && landingData.services.visible) {
        sections.push(React.createElement(CoreRootTriSection, {
          services: landingData.services
        }));
      }
      sections.push(React.createElement(SaraiPartners));
    }
  }
  onData(null, {sections, spacing});
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);
