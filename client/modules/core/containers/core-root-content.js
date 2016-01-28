import React from 'react';
import CoreRootBanner from './core-root-banner';
import CoreRootTriSection from './core-root-tri-section';
import SaraiPartners from './../components/sarai-partners.jsx';
import {SectionList} from '/client/modules/ui-components';
import {useDeps} from '/client/libs/mantra';


const depsToSectionList = () => ({
  sections: [
    React.createElement(CoreRootBanner),
    React.createElement(CoreRootTriSection),
    React.createElement(SaraiPartners)
  ],
  spacing: false
});

export default useDeps(depsToSectionList)(SectionList);
