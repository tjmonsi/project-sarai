import {NavMenu, LandingData} from '/lib/collections';

if (!NavMenu.findOne({module: 'cms'})) {
  NavMenu.insert({
    module: 'cms',
    navs: [
      {
        href: '',
        label: 'CMS 1'
      },
      {
        href: '',
        label: 'CMS 2'
      },
      {
        href: '',
        label: 'CMS 3'
      },
      {
        href: '',
        label: 'Login'
      }
    ]
  });
}


if (!LandingData.findOne({path: 'cms.root'})) {
  LandingData.insert({
    path: 'cms.root',
    banner: {
      background: '/images/banner-approved.jpg',
      title: 'Project SARAI - Crops',
      text: 'Crops System'
    }
  });
}
