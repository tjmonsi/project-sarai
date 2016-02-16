import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'knowledge-hub.root'})) {
  LandingData.insert({
    img: '',
    background: '',
    title: 'SARAI Eskwela',
    text: 'Learn more about farming by accessing agricultural courses online for free.',
    link: 'knowledge-hub.root',
    sort: 9
  });
}
