import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'alerts-and-advisories.root'})) {
  LandingData.insert({
    img: '',
    background: '',
    title: 'Alerts and Advisories',
    text: 'Receive crop alerts and advisories to help you increase your yield and your profit.',
    link: 'alerts-and-advisories.root',
    sort: 6
  });
}