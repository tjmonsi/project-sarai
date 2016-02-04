import '/node_modules/material-design-lite/material';
import {createApp} from 'mantra-core';
import {initContext} from './configs/context';

import coreModule from './modules/core';

const context = initContext();
const app = createApp(context);

// Load first modules
app.loadModule(coreModule);

// Load routes last. Configure routes at /imports/configs/routes
app.init();
