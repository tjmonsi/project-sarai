import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'core.about'})) {
  LandingData.insert({
    path: 'core.about',
    background: '/images/banner-approved.jpg',
    img: '',
    title: 'About Project SARAI',
    text: 'Smarter Farmers, Smarter Agriculture.',
  });
}
