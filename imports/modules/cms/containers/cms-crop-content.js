import React from 'react';
import RootBanner from './cms-root-banner';
import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

const composerLandingPage = ({context, edit}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {LandingData, Cms} = Collections;
  const sections = [];
  const spacing = false;

  if (Meteor.subscribe('get-cms', FlowRouter.getParam('crop')).ready()) {
    const Crop = Cms.findOne();
  }
  // if (Meteor.subscribe('landing-page', 'cms.root').ready()) {
  //   const landingData = LandingData.findOne();
  //   if (landingData) {
  //     if (landingData.banner) {
  //       sections.push(React.createElement(RootBanner, {
  //         banner: landingData.banner
  //       }));
  //     }
  //   }
  // }
  onData(null, {sections, spacing});
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);
