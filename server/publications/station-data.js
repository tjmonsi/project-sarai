import {StationData} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('station-data', () => {
  // check(path, String);
  return StationData.find();
});