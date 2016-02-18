import {NavMenu} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('nav-menu', (moduleName) => {
  check(moduleName, String);
  return NavMenu.find({module: moduleName}, {limit: 1, sort: {moduleName: 1}});
});
