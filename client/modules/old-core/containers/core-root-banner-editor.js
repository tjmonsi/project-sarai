import React from 'react';
import {BannerEditor} from '/client/modules/old-ui-components';
import RootBannerLeftEditor from './core-root-banner-left-editor';
import {useDeps, composeAll, compose} from 'mantra-core';

const composer = ({banner}, onData) => {
  const leftSection = React.createElement(RootBannerLeftEditor, {
    background: banner.background,
    title: banner.title,
    text: banner.text
  });
  onData(null, {leftSection});
};

export default composeAll(
  compose(composer),
  useDeps()
)(BannerEditor);
