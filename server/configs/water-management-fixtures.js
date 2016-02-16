import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'water-management.root'})) {
  LandingData.insert({
    img: '',
    background: '',
    title: 'Integrated Water Management',
    text: 'Monitor the moisture content of the soil in your area.',
    link: 'water-management.root',
    sort: 3
  });
}
