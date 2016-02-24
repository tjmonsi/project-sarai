import {WeatherStations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('weather-stations', () => {
  return WeatherStations.find();
});