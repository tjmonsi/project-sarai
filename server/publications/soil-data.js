import {SoilData} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

Meteor.publish('soil-data', () => {
  return SoilData.find();
});