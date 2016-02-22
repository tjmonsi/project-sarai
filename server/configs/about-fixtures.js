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

if (!LandingData.findOne({path: 'about.team'})) {
  LandingData.insert({
    path: 'about.team',
    background: '/images/banner-approved.jpg',
    img: '',
    title: 'Meet the SARAI Team',
    text: 'Smarter Farmers, Smarter Agriculture.',
  });
}

if (!LandingData.findOne({path: 'about.partner'})) {
  LandingData.insert({
    path: 'about.partner',
    background: '/images/banner-approved.jpg',
    img: '',
    title: 'SARAI Partner Institutions',
    text: 'Smarter Farmers, Smarter Agriculture.',
  });
}
