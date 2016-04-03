import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import WeatherMap from './../components/weather-map.jsx';

const composer = ({stations}, onData) => {
  onData(null, {stations});
};

const deps = (context, actions) => ({
  getHourlyTemperature: actions.dataParser.getHourlyTemperature,
  getSampleResponse: actions.sampleData.getSampleResponse,
  context: () => context
})

export default composeAll(
  compose(composer),
  useDeps(deps)
)(WeatherMap);
