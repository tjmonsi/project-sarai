import React from 'react';
import CoreRootBannerIconGroup from './core-root-banner-icon-group';
import {Banner, BannerTitle} from '/client/modules/ui-components';
import {useDeps} from '/client/libs/mantra';


const depsToBanner = () => ({
  leftSection: React.createElement(BannerTitle, {
    title: 'Project SARAI',
    text: 'Smarter Farmers, Smarter Agriculture.'
  }),
  rightSection: React.createElement(CoreRootBannerIconGroup),
  bottomSection: null
});

export default useDeps(depsToBanner)(Banner);
