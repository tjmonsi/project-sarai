import {Mongo} from 'meteor/mongo';

const StationList = new Mongo.Collection('stationlist');

StationList.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

StationList.methods = {};

export default StationList;