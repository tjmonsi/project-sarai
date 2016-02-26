import {StationList} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('station-list', () => {
  // check(path, String);
  return StationList.find();
});