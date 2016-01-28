import React from 'react';
import {Icon, IconGroup} from '/client/modules/ui-components';
import {useDeps} from '/client/libs/mantra';


const depsToIconGroup = (context, action) => ({
  icons: action.core.getIconGroup().map((icon) => {
    return React.createElement(Icon, {
      icon: icon.icon,
      text: icon.text,
      link: icon.link
    });
  }),
  context: () => context
});

export default useDeps(depsToIconGroup)(IconGroup);
