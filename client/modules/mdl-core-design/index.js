// all atoms
import MdlAppLoginNav from './components/atoms/mdl-app-login-nav.jsx';
import MdlAppLogo from './components/atoms/mdl-app-logo.jsx';
import MdlAppTitle from './components/atoms/mdl-app-title.jsx';
import MdlIconButton from './components/atoms/mdl-icon-button.jsx';
import MdlInputText from './components/atoms/mdl-input-text.jsx';
import MdlNavLink from './components/atoms/mdl-nav-link.jsx';
import MdlSnackbar from './components/atoms/mdl-snackbar.jsx';
import MdlSpinner from './components/atoms/mdl-spinner.jsx';
import MdlTooltip from './components/atoms/mdl-tooltip.jsx';

// all molecules
import TitleText from './components/molecules/title-text.jsx';

// all organisms
import GoogleMap from './components/organisms/google-map.jsx';
import MarkdownEditor from './components/organisms/markdown-editor.jsx';
import MdlAppBarHeaderRow from './components/organisms/mdl-app-bar-header-row.jsx';
import MdlDialog from './components/organisms/mdl-dialog.jsx';
import MdlInsertLinkDialog from './components/organisms/mdl-insert-link-dialog.jsx';
import MdlAppBar from './components/organisms/mdl-app-bar.jsx';
import MdlBanner from './components/organisms/mdl-banner.jsx';
import MdlSections from './components/organisms/mdl-sections.jsx';

// all templates
import MdlLanding from './components/templates/mdl-landing.jsx';
import MdlPage from './components/templates/mdl-page.jsx';

export {
  // all atoms
  MdlAppLoginNav,
  MdlAppLogo,
  MdlAppTitle,
  MdlIconButton,
  MdlInputText,
  MdlNavLink,
  MdlSnackbar,
  MdlSpinner,
  MdlTooltip,

  // all molecules
  TitleText,

  // all organisms
  GoogleMap,
  MarkdownEditor,
  MdlAppBarHeaderRow,
  MdlDialog,
  MdlInsertLinkDialog,
  MdlAppBar,
  MdlBanner,
  MdlSections,

  // all templates
  MdlLanding,
  MdlPage
};

import routes from './routes';

export default {
  load: () => null,
  routes
};
