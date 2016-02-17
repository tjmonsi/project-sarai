import {LandingData} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('landing-page', (path) => {
  check(path, String);
  return LandingData.find({path}, {limit: 1, sort: {path: 1}});
});

Meteor.publish('services', (paths) => {
  check(paths, [String]);
  return LandingData.find({path: {$in: paths}}, {sort: {sort: 1}});
});
