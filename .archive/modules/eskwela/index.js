import actions from './actions';
import routes from './routes';

import _EskwelaRootContent from './containers/eskwela-root-content';
import _EskwelaTNAContent from './containers/eskwela-tna-content';
import _EskwelaRootCourses from './containers/eskwela-root-courses';

import _HighChart from './components/high-chart.jsx';
import _EskwelaHeader from './components/eskwela-header.jsx';
import _EskwelaList from './components/eskwela-list.jsx';

import _FourColSection from './components/four-col-section.jsx';

export default {
  actions,
  load: () => null,
  routes
};

export const EskwelaRootContent = _EskwelaRootContent;
export const EskwelaTNAContent = _EskwelaTNAContent;
export const EskwelaRootCourses = _EskwelaRootCourses;

export const HighChart = _HighChart;
export const EskwelaHeader = _EskwelaHeader;
export const EskwelaList = _EskwelaList;
export const FourColSection = _FourColSection;
