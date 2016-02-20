import {Meteor} from 'meteor/meteor';

export default {
  saveBanner(context, title, background, text) {
    console.log(title, background, text);
    Meteor.call('LandingData.update', 'core.root', title, background, text, (err, res) => {
      if (err) {
        console.error(err)
      } else {
        console.log(res);
      }
    })
  },
  getIconGroup() {
    return [
      {
        icon: '/images/logos/400x400/no-text/DSS.png',
        text: 'Decision Support',
        link: ''
      },
      {
        icon: '/images/logos/400x400/no-text/alerts.png',
        text: 'Sarai Alerts',
        link: ''
      },
      {
        icon: '/images/logos/400x400/no-text/calendar.png',
        text: 'Planting Calendar',
        link: ''
      },
      {
        icon: '/images/logos/400x400/no-text/eskwela.png',
        text: 'Sarai Eskwela',
        link: ''
      },
      {
        icon: '/images/logos/400x400/no-text/khub.png',
        text: 'Knowledge Hub',
        link: ''
      },
      {
        icon: '/images/logos/400x400/no-text/maps.png',
        text: 'Sarai Maps',
        link: ''
      },
      {
        icon: '/images/logos/400x400/no-text/open-data.png',
        text: 'Open Data',
        link: ''
      },
      {
        icon: '/images/logos/400x400/no-text/real-time.png',
        text: 'Real Time',
        link: ''
      }
    ];
  }
};
