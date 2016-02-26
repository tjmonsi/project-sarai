import {ChartLabels} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('chart-labels', () => {
  return ChartLabels.find();
});