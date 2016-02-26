import {Mongo} from 'meteor/mongo';

const ChartLabels = new Mongo.Collection('chart-labels');

ChartLabels.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

ChartLabels.methods = {};

export default ChartLabels;