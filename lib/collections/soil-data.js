import {Mongo} from 'meteor/mongo';

const SoilData = new Mongo.Collection('soil-data');

SoilData.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

SoilData.methods = {};

export default SoilData;