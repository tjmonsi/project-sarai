import React from 'react';
import { Banner, BannerTitle } from '/client/modules/ui-components-v2';
import {composeAll, useDeps, composeWithTracker} from 'mantra-core';
import lib from './../lib';
import {mediaLibMethod} from './core-media-lib';

const composeLandingData = ({context, actions}, onData) => {
  const {Collections, Meteor, FlowRouter} = context();
  const {coreRoot} = actions();
  const {saveBanner} = coreRoot;
  const {LandingData} = Collections;
  const {coreAuthenticate} = lib;
  const edit = !!coreAuthenticate() && FlowRouter.getQueryParam('edit') === 'true';
  const id = 'core-root-banner';
  const path = 'core.root';

  if (Meteor.subscribe('landing-page', path).ready()) {
    const landingData = LandingData.find({path}, {limit: 1, sort: {sort: 1}})
      .fetch()[0];

    if (landingData) {
      const {title, background, text} = landingData;
      const leftSection = () => (React.createElement(BannerTitle, {
        background,
        edit,
        id,
        saveBanner,
        title,
        text,
        path,
        mediaLib: {
          authenticate: coreAuthenticate,
          prefix: '/core',
          publicFlag: true,
          mediaLibMethod
        }
      }));
      onData(null, {background, leftSection});
    } else {
      onData(null);
    }
  } else {
    onData(null);
  }
};

export default composeAll(
  composeWithTracker(composeLandingData),
  useDeps()
)(Banner);
