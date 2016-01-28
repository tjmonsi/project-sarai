import '/node_modules/material-design-lite/material';
import {initContext} from './configs/context';
import {createApp} from './libs/mantra';
import routes from './configs/routes';

import uiComponentsModule from './modules/ui-components';
import coreModule from './modules/core';

const context = initContext();
const app = createApp(context);

// Load first modules
app.loadModule(uiComponentsModule);
app.loadModule(coreModule);

// Load routes last. Configure routes at /imports/configs/routes
app.loadRoutes(routes);
