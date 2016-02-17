import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'open-data.root'})) {
  LandingData.insert({
    img: '',
    background: '',
    title: 'Open Data',
    text: 'Search through SARAI’s database to know more about SARAI’s experiments.',
    path: 'open-data.root',
    sort: 7
  });
}
