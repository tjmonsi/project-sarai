import React from 'react';
import {SectionCard} from '/client/modules/old-ui-components';
import {useDeps, compose, composeAll} from 'mantra-core';

import FourColSection from './../components/four-col-section.jsx';

const composer = ({courses}, onData) => {
  const sections = courses.courses.map((section) => {
    return React.createElement(SectionCard, section);
  });
  const spacing = true;
  onData(null, {sections, spacing});
};

export default composeAll(
  compose(composer),
  useDeps()
)(FourColSection);
