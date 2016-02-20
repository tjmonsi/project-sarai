import '/node_modules/material-design-lite/material';
import {createApp} from 'mantra-core';
import {initContext} from './configs/context';

// This is deprecated...
import coreModule from './modules/old-core';
import coreModuleV2 from './modules/old-core-v2';
import eskwelaModule from './modules/old-eskwela';

// These are the new ones


const context = initContext();
const app = createApp(context);

// Load first modules
// Loading the deperacted
app.loadModule(coreModuleV2);
app.loadModule(coreModule);
app.loadModule(eskwelaModule);

// Load the new ones here

// Load routes last.
app.init();
