import React from 'react';
import {BannerTitleEditor} from '/client/modules/ui-components';
import CmsRootBannerLeftEditor from './cms-root-banner-left-editor';
import {useDeps, composeAll, compose} from 'mantra-core';

const composer = ({title, background, text}, onData) => {
  onData(null, {title, background, text});
};

const deps = (context, actions) => ({
  callback: actions.root.saveBanner,
  context: () => context
})

export default composeAll(
  compose(composer),
  useDeps(deps)
)(BannerTitleEditor);
