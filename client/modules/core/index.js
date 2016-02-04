import actions from './actions';
import CoreNav from './containers/core-nav';
import CoreAppTitle from './containers/core-app-title';
import CoreAppBar from './containers/core-app-bar';
import CoreAppDrawer from './containers/core-app-drawer';
import CoreRootContent from './containers/core-root-content';
import CoreFooter from './containers/core-footer';
import CoreRootBannerIconGroup from './containers/core-root-banner-icon-group';
import CoreRootTriSection from './containers/core-root-tri-section';

import SaraiPartners from './components/sarai-partners.jsx';
import GovernmentFooter from './components/government-footer.jsx';

import routes from './routes';

export default {
  actions,
  CoreNav,
  CoreAppBar,
  CoreAppDrawer,
  CoreAppTitle,
  CoreFooter,
  CoreRootBannerIconGroup,
  CoreRootContent,
  CoreRootTriSection,
  GovernmentFooter,
  load: () => null,
  routes,
  SaraiPartners
};
