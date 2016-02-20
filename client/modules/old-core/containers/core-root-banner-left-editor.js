import React from 'react';
import {BannerTitleEditor} from '/client/modules/old-ui-components';
import {useDeps, composeAll, compose} from 'mantra-core';

const composer = ({title, background, text}, onData) => {
  onData(null, {title, background, text});
};

const deps = (context, actions) => ({
  callback: actions.core.saveBanner,
  context: () => context
})

export default composeAll(
  compose(composer),
  useDeps(deps)
)(BannerTitleEditor);
