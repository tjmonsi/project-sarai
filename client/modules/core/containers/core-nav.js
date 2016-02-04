import { NavList } from '/client/modules/ui-components';
import {composeAll, useDeps, composeWithTracker} from 'mantra-core';

const composer = ({context, position}, onData) => {
  const {Meteor, Collections} = context();
  const {NavMenu} = Collections;

  if (Meteor.subscribe('nav-menu', 'core').ready()) {
    const navs = NavMenu.find().fetch()[0].navs;
    onData(null, {navs, position});
  } else {
    onData(null, {navs: [], position});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(NavList);
