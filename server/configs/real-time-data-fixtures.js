import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'real-time-data.root'})) {
  LandingData.insert({
    img: '',
    background: '',
    title: 'Real-Time Data',
    text: 'View real-time weather data from the Automatic Weather Stations installed throughout the country.',
    link: 'real-time-data.root',
    sort: 5
  });
}
