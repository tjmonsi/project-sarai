import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'knowledge-hub.root'})) {
  LandingData.insert({
    img: '',
    background: '',
    title: 'Knowledge Hub',
    text: 'Read write-ups, videos, and other materials to know more about SARAI’s six priority crops.',
    link: 'knowledge-hub.root',
    sort: 8
  });
}