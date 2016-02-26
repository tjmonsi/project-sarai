import {Mongo} from 'meteor/mongo';

const SimulatedYield = new Mongo.Collection('simulated-yield');

SimulatedYield.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

SimulatedYield.methods = {};

export default SimulatedYield;