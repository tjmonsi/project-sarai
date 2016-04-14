import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import {SectionList} from '/client/modules/ui-components';
import {CoreRootTriSection} from '/client/modules/core';

import WeatherMap from './weather-monitoring';


const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const {LandingData, WeatherStations} = Collections;

  const sections = [];
  const spacing = false;

  if (Meteor.subscribe('weather-stations').ready()) {
    
    const stations = WeatherStations.find().fetch();

    if(stations) {
      // console.log(`Found ${WeatherStations.find().count()} stations`)
      sections.push(React.createElement(WeatherMap, {stations}));
    }
  }
  
  onData(null, {sections, spacing});
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);