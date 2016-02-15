import React from 'react';
import RootBanner from './cms-root-banner';
import RootBannerEditor from './cms-root-banner-editor';
import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

const composerLandingPage = ({context, edit}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {LandingData} = Collections;
  const sections = [];
  const spacing = false;

  if (Meteor.subscribe('landing-page', 'cms.root').ready()) {
    const landingData = LandingData.findOne();
    if (landingData) {
      if (landingData.banner) {
        sections.push(React.createElement(RootBanner, {
          banner: landingData.banner
        }));
      }
      
      if (FlowRouter.getQueryParam('edit') === 'true' && Meteor.user()) {
        sections.push(React.createElement(RootBannerEditor, {
          banner: landingData.banner
        }));
      }
    }
  }
  
  onData(null, {sections, spacing});
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);
