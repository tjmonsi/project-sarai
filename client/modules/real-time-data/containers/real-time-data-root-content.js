import React from 'react';

import MapBanner from './../components/map-banner.jsx';
import RealTimeDataRootStuff from './../components/real-time-data-root-stuff.jsx';

import {SectionList} from '/client/modules/ui-components';
import {CoreRootTriSection} from '/client/modules/core';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const {LandingData, StationList} = Collections;

  const sections = [];
  const spacing = false;

  // const path = 'real-time-data.root';

  if (Meteor.subscribe('station-list').ready()) {
    
    // const stationList = StationList.findOne();
    const stations = StationList.find().fetch(); //So this'll return an array

    if(stations) {
      //const {contacts} = station;
      sections.push(React.createElement(MapBanner, {stations}));
    }
  }
  
  onData(null, {sections, spacing});
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);