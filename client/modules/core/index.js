import actions from './actions';
import CoreAppNav from './containers/core-app-nav';
import CoreAppTitle from './containers/core-app-title';
import CoreAppBar from './containers/core-app-bar';
import CoreAppDrawer from './containers/core-app-drawer';
import CoreRootContent from './containers/core-root-content';
import CoreFooter from './containers/core-footer';
import CoreRootBannerIconGroup from './containers/core-root-banner-icon-group';
import CoreRootTriSection from './containers/core-root-tri-section';

import SaraiPartners from './components/sarai-partners.jsx';

export default {
  actions,
  CoreAppBar,
  CoreAppDrawer,
  CoreAppNav,
  CoreAppTitle,
  CoreFooter,
  CoreRootBannerIconGroup,
  CoreRootContent,
  CoreRootTriSection,
  load: () => null,
  SaraiPartners
};
