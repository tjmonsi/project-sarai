import actions from './actions';
import routes from './routes';
import lib from './lib';
import _CoreNavList from './containers/core-nav-list';
import _CoreBanner from './containers/core-banner';

export default {
  actions,
  load: () => null,
  routes
};

export const coreLib = lib;
export const CoreNavList = _CoreNavList;
export const CoreBanner = _CoreBanner;