import React from 'react';
import {Banner, BannerTitle} from '/client/modules/ui-components';
import {useDeps, composeAll, compose} from 'mantra-core';

const composer = ({banner}, onData) => {
  const leftSection = React.createElement(BannerTitle, {
    title: banner.title,
    text: banner.text
  });
  const background = banner.background ? banner.background : '';
  onData(null, {leftSection, background});
};

export default composeAll(
  compose(composer),
  useDeps()
)(Banner);
