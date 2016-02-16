import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'crop-support-system.root'})) {
  LandingData.insert({
    img: '',
    background: '',
    title: 'Integrated Crop Support System',
    text: 'Maximize your yield and enhance your adaptibility amidst change in climate and socio-economic conditions by using SARAI’s integrated, farm-specific, crop support system.',
    path: 'crop-support-system.root',
    sort: 1
  });
}
