import {SimulatedYield} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('simulated-yield', () => {
  return SimulatedYield.find();
});

Meteor.publish('simulated-yield-areas', () => {
  return SimulatedYield.find({}, {name: 1, coordinates: 1});
});