import {Mongo} from 'meteor/mongo';

const LandingData = new Mongo.Collection('landing-data');

LandingData.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

LandingData.methods = {};

export default LandingData;
