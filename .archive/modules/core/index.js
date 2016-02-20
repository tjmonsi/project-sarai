import actions from './actions';
import routes from './routes';
import * as lib from './lib';

import _CoreNav from './containers/core-nav';
import _CoreAppTitle from './containers/core-app-title';
import _CoreAppBar from './containers/core-app-bar';
import _CoreAppDrawer from './containers/core-app-drawer';
import _CoreRootContent from './containers/core-root-content';
import _CoreFooter from './containers/core-footer';
import _CoreRootBannerIconGroup from './containers/core-root-banner-icon-group';
import _CoreRootTriSection from './containers/core-root-tri-section';

import _SaraiPartners from './components/sarai-partners.jsx';
import _GovernmentFooter from './components/government-footer.jsx';

export default {
  actions,
  load: () => null,
  routes
};

export const coreLib = lib;
export const CoreNav = _CoreNav;
export const CoreAppBar = _CoreAppBar;
export const CoreAppDrawer = _CoreAppDrawer;
export const CoreAppTitle = _CoreAppTitle;
export const CoreFooter = _CoreFooter;
export const CoreRootBannerIconGroup = _CoreRootBannerIconGroup;
export const CoreRootContent = _CoreRootContent;
export const CoreRootTriSection = _CoreRootTriSection;
export const GovernmentFooter = _GovernmentFooter;
export const SaraiPartners = _SaraiPartners;

