import {Mongo} from 'meteor/mongo';

const WeatherStations = new Mongo.Collection('weather-stations');

WeatherStations.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

WeatherStations.methods = {};

export default WeatherStations;