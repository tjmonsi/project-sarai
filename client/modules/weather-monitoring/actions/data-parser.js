import {Meteor} from 'meteor/meteor';
// import {WeatherStations} from '/lib/collections';

export default {
  getHourlyTemperature(hf) {
    const temperature = [];

    console.log("action.getHourlyTemperature: ");
    console.log(hf);

    for (let entry of hf) {
      const ftc = entry.FCTTIME;

      // temperature.push([Date.UTC(ftc.year, ftc.mon, ftc.mday, ftc.hour, ftc.), entry.temp.metric]);
      temperature.push("something");
    }

    return temperature;
  },

  getHourlyRainfall(hf) {
    return [];
  },

  getHourlyPressure(hf) {

  },

  getHourlyWind(hf) {
    return [];
  }
}
