import React from 'react';

import MonitoringMapCharts from './../components/monitoring-map-charts.jsx';
import MonitoringInfoGrid from './../components/monitoring-info-grid.jsx';

import {SectionList} from '/client/modules/ui-components';
import {CoreRootTriSection} from '/client/modules/core';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const {LandingData, SimulatedYield, ChartLabels, SoilData} = Collections;

  const sections = [];
  const spacing = false;

  if (Meteor.subscribe('simulated-yield-areas').ready()
      && Meteor.subscribe('chart-labels').ready()
      && Meteor.subscribe('soil-data').ready()) {

    // const areas = SimulatedYield.find({}, {name: 1, coordinates: 1}).fetch();
    const areas = SimulatedYield.find({}).fetch();
    const labels = ChartLabels.findOne({name: "simulatedYield"});
    const soilData = SoilData.find({}).fetch();

    console.log(`Found ${SoilData.find({}).count()} soil areas`);
    
    // console.log(areas);
    // console.log(SimulatedYield.findOne({}));
    // console.log(`Found ${SimulatedYield.find().count()} areas`);

    sections.push(React.createElement(MonitoringMapCharts, {
      areas, labels, soilData
    }));

    sections.push(React.createElement(MonitoringInfoGrid));
  }
  

  onData(null, {sections, spacing});
};

const deps = (context, actions) => ({
  callback: actions.monitoring.getSimulatedYield,
  context: () => context
})

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps(deps)
)(SectionList);