import {Mongo} from 'meteor/mongo';

const Emergency = new Mongo.Collection('emergency');

Emergency.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Emergency.methods = {};

export default Emergency;
