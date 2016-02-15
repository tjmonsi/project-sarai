import {Cms} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('get-all-cms', () => {
  return Cms.find();
});

Meteor.publish('get-cms', (crop) => {
  return Cms.find({crop: crop},{limit: 1, sort: {_id: 1}})
});
