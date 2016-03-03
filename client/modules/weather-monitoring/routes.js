import React from 'react';

import WeatherMonitoringRootContent from './containers/weather-monitoring-root-content';

import {Landing, MapPage} from '/client/modules/ui-components';
import {CoreAppBar, CoreAppDrawer, CoreFooter} from '/client/modules/core';

export default (injectDeps, context) => {
	const {FlowRouter, mount} = context;
	const LandingCtx = injectDeps(Landing);
	const MapPageCtx = injectDeps(MapPage);

	FlowRouter.route('/weather-monitoring', {
		name: 'real-time-data.root',
		action() {
			mount(LandingCtx, {
				//appBar: React.createElement(CoreAppBar),
				//appDrawer: React.createElement(CoreAppDrawer),
				content: React.createElement(WeatherMonitoringRootContent)
			});
		}
	});
};