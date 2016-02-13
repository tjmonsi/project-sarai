import '/node_modules/material-design-lite/material';
import {createApp} from 'mantra-core';
import {initContext} from './configs/context';

import experimentModule from './modules/experiment';
import coreModule from './modules/core';
import cmsModule from './modules/cms';


const context = initContext();
const app = createApp(context);

// Load first modules
app.loadModule(coreModule);
app.loadModule(experimentModule);
app.loadModule(cmsModule);

// Load routes last.
app.init();
