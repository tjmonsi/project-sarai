import React from 'react';
import CoreRootBannerIconGroup from './core-root-banner-icon-group';
import {Banner, BannerTitle} from '/client/modules/ui-components';
import {useDeps, composeAll, compose} from 'mantra-core';

const composer = ({banner}, onData) => {
  const leftSection = React.createElement(BannerTitle, {
    title: banner.title,
    text: banner.text
  });
  const rightSection = React.createElement(CoreRootBannerIconGroup, {
    iconGroup: banner.iconGroup
  });

  onData(null, {leftSection, rightSection});
};

export default composeAll(
  compose(composer),
  useDeps()
)(Banner);

// const depsToBanner = () => ({
//   leftSection: React.createElement(BannerTitle, {
//     title: 'Project SARAI',
//     text: 'Smarter Farmers, Smarter Agriculture.'
//   }),
//   rightSection: React.createElement(CoreRootBannerIconGroup),
//   bottomSection: null
// });

// export default useDeps(depsToBanner)(Banner);
