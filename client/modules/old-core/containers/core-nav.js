import { NavList } from '/client/modules/old-ui-components';
import {composeAll, useDeps, composeWithTracker} from 'mantra-core';

const composer = ({context, position, module = 'core'}, onData) => {
  const {Meteor, Collections} = context();
  const {NavMenu} = Collections;

  if (Meteor.subscribe('nav-menu', module).ready()) {
    const list = NavMenu.find().fetch();
    if (list.length >= 1) {
      const navs = NavMenu.find().fetch()[0].navs;
      onData(null, {navs, position});
    } else {
      onData(null, {navs: [], position});
    }
  } else {
    onData(null, {navs: [], position});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(NavList);
