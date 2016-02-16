import {NavMenu, LandingData, Cms} from '/lib/collections';

if (!NavMenu.findOne({module: 'cms'})) {
  NavMenu.insert({
    module: 'cms',
    navs: []
  });
}


if (!LandingData.findOne({path: 'cms.root'})) {
  LandingData.insert({
    path: 'cms.root',
    img: '',
    background: '',
    title: 'Project SARAI - Crops',
    text: 'Crops System'
  });
}

if (!Cms.findOne({crop: 'rice'})) {
  Cms.insert({
    crop: 'rice',
    title: 'Rice',
    description: 'This is a description for Rice',
    published: true,
    writeup: 'This is a write up for rice',
    keywords: ['rice'],
    hits: 0,
    bannerPic: null
  });
}
