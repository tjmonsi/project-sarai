import {Emergency} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

Meteor.publish('emergency', () => {
  return Emergency.find({validBy: {$lt: new Date()}}, {limit: 5, sort: {createdBy: -1}});
});
