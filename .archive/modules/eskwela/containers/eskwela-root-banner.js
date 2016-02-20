import React from 'react';

import {Banner, BannerTitle} from '/client/modules/ui-components';
import {useDeps, composeAll, compose} from 'mantra-core';

const composer = ({banner}, onData) => {
  const leftSection = React.createElement(BannerTitle, {
    title: 'BUILD YOUR AGRICULTURAL KNOWLEDGE ONLINE',
    text: ''
  });

  onData(null, {background: banner, leftSection});
};

export default composeAll(
  compose(composer),
  useDeps()
)(Banner);
