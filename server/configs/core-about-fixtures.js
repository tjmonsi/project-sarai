import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'about.root'})) {
  LandingData.insert({
    path: 'about.root',
    background: '/images/banner-approved.jpg',
    img: '',
    title: 'About Project SARAI',
    text: 'Smarter Farmers, Smarter Agriculture.',
  });
}
