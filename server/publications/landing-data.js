import {LandingData} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('landing-page', (path) => {
  check(path, String);
  return LandingData.find({path: path}, {limit: 1, sort: {path: 1}});
});
