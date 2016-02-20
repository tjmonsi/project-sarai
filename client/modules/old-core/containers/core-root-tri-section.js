import React from 'react';
import {TriSection, SectionCard} from '/client/modules/old-ui-components';
import {useDeps, compose, composeAll} from 'mantra-core';

const composer = ({services}, onData) => {
  const sections = services.services.map((section) => {
    return React.createElement(SectionCard, section);
  });
  const spacing = true;
  onData(null, {sections, spacing});
};

export default composeAll(
  compose(composer),
  useDeps()
)(TriSection);
