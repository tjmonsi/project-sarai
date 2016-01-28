import React from 'react';
import {TriSection, SectionCard} from '/client/modules/ui-components';
import {useDeps} from '/client/libs/mantra';


const depsToSectionList = (context, action) => ({
  sections: action.core.getSectionCard().map((section) => {
    return React.createElement(SectionCard, section);
  }),
  spacing: true
});

export default useDeps(depsToSectionList)(TriSection);
