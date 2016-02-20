import {Mongo} from 'meteor/mongo';

const StationData = new Mongo.Collection('stationdata');

StationData.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

StationData.methods = {};

export default StationData;