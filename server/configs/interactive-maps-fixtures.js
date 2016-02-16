import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'interactive-maps.root'})) {
  LandingData.insert({
    img: '',
    background: '',
    title: 'Interactive Maps',
    text: 'Guide your farming decisions through the suitability, vulnerability, hazard, and crop production area maps produced by SARAI.',
    link: 'interactive-maps.root',
    sort: 4
  });
}