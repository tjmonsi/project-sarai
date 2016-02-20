import '/node_modules/material-design-lite/material';
import {createApp} from 'mantra-core';
import {initContext} from './configs/context';

import experimentModule from './modules/experiment';
import coreModule from './modules/core';
// import cmsModule from './modules/cms';
import coreModuleV2 from './modules/core-v2';
import interactiveMapModule from './modules/interactive-maps';
import eskwelaModule from './modules/eskwela';
import aboutModule from './modules/about-v1';


const context = initContext();
const app = createApp(context);

// Load first modules
app.loadModule(coreModuleV2);
app.loadModule(coreModule);
app.loadModule(experimentModule);
app.loadModule(interactiveMapModule);
app.loadModule(aboutModule);
// app.loadModule(cmsModule);
app.loadModule(eskwelaModule);

// Load routes last.
app.init();
