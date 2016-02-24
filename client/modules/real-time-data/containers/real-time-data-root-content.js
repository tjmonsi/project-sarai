import React from 'react';

<<<<<<< HEAD
import WeatherMap from './../components/weather-map.jsx';
import RealTimeDataRootStuff from './../components/real-time-data-root-stuff.jsx';

import {SectionList} from '/client/modules/ui-components';
import {CoreRootTriSection} from '/client/modules/core';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const {LandingData, StationList} = Collections;

  const sections = [];
  const spacing = false;

  if (Meteor.subscribe('station-list').ready()) {
    
    // const stationList = StationList.findOne();
    const stations = StationList.find().fetch();


    if(stations) {
      console.log(`Found ${StationList.find().count()} stations`)
      sections.push(React.createElement(WeatherMap, {stations}));
    }
  }
  
  onData(null, {sections, spacing});
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);