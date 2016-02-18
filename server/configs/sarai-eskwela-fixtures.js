import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'sarai-eskwela.root'})) {
  LandingData.insert({
    img: '',
    background: '',
    title: 'SARAI Eskwela',
    text: 'Learn more about farming by accessing agricultural courses online for free.',
    path: 'sarai-eskwela.root',
    sort: 9
  });
}
