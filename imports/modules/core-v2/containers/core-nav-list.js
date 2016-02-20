import { NavList } from '/client/modules/ui-components-v2';
import lib from './../lib';
import {composeAll, compose, useDeps, composeWithTracker} from 'mantra-core';

const navMenuComposer = ({context, module = 'core'}, onData) => {
  const {Meteor, Collections} = context();
  const {NavMenu} = Collections;
  let navs = [];

  if (Meteor.subscribe('nav-menu', module).ready()) {
    const list = NavMenu.find().fetch();
    if (list.length >= 1) {
      navs = NavMenu.find().fetch()[0].navs;
    }
  }
  onData(null, {navs});
};

const positionComposer = ({position = 'app-bar'}, onData) => {
  onData(null, {position});
};

const routeComposer = ({context}, onData) => {
  const {FlowRouter} = context();
  FlowRouter.watchPathChange();
  const queryParams = {
    redirect: FlowRouter.current().path
  };

  const login = FlowRouter.path('core.login', {}, queryParams);
  const logout = FlowRouter.path('core.logout', {}, queryParams);

  onData(null, {login, logout});
};

const menuEditor = ({context}, onData) => {
  const {FlowRouter} = context();
  const {coreAuthenticate} = lib;
  const edit = !!coreAuthenticate() && FlowRouter.getQueryParam('edit') === 'true';
  onData(null, {edit});
};

export default composeAll(
  composeWithTracker(navMenuComposer),
  composeWithTracker(routeComposer),
  composeWithTracker(menuEditor),
  compose(positionComposer),
  useDeps()
)(NavList);
