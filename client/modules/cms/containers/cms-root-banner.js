import React from 'react';
import {Banner, BannerTitle} from '/client/modules/ui-components';
import {useDeps, composeAll, compose} from 'mantra-core';

const composer = ({banner}, onData) => {
  const leftSection = React.createElement(BannerTitle, {
    title: banner.title,
    text: banner.text
  });
  onData(null, {leftSection});
};

export default composeAll(
  compose(composer),
  useDeps()
)(Banner);
