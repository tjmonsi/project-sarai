import React from 'react';
import CoreRootBanner from './core-root-banner';
import CoreRootTriSection from './core-root-tri-section';
import SaraiPartners from './../components/sarai-partners.jsx';
import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

const composerLandingPage = ({context}, onData) => {
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
      }

      if (landingData.services && landingData.services.visible) {
        console.log(landingData.services);
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

// const depsToSectionList = () => ({
//   sections: [
//     React.createElement(CoreRootBanner),
//     React.createElement(CoreRootTriSection),
//     React.createElement(SaraiPartners)
//   ],
//   spacing: false
// });

// export default useDeps(depsToSectionList)(SectionList);
