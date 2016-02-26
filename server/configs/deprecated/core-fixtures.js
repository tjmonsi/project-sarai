import {NavMenu, LandingData} from '/lib/collections';

if (!NavMenu.findOne({module: 'core'})) {
  NavMenu.insert({
    module: 'core',
    navs: [
      {
        href: '',
        label: 'About SARAI',
        id: 'about-sarai-link',
        links: [
          {
            href: 'about.root',
            label: 'About the Project'
          },
          {
            href: 'about.team',
            label: 'About the Team'
          },
          {
            href: 'about.partner',
            label: 'Partner Institutions'
          }
        ]
      },
      {
        href: '',
        label: 'Explore',
        id: 'explore-sarai-link',
        links: [
          {
            href: 'interactive-maps.root',
            label: 'Interactive Maps'
          },
          {
            href: 'suitability-maps.root',
            label: 'Suitability Maps'
          },
          {
            href: '',
            label: 'Planting Calendar'
          }
        ]
      },
      {
        href: '',
        label: 'Be Updated',
        id: 'be-updated-sarai-link',
        links: [
          {
            href: 'alerts-and-advisory.root',
            label: 'Alerts & Advisory'
          },
          {
            href: 'sarai-eskwela.root',
            label: 'SARAI Eskwela'
          },
          {
            href: '',
            label: 'Subscribe'
          }
        ]
      },
      {
        href: '',
        label: 'Get Involved',
        id: 'get-involved-sarai-link',
        links: [
          {
            href: '',
            label: 'Submit a Story'
          },
          {
            href: '',
            label: 'Share Data'
          },
          {
            href: '',
            label: 'Join the Discussion'
          },
          {
            href: '',
            label: 'Feedback'
          }
        ]
      }
    ]
  });
}

if (!LandingData.findOne({path: 'core.root'})) {
  LandingData.insert({
    path: 'core.root',
    background: '/images/banner-approved.jpg',
    img: '',
    title: 'Project SARAI',
    text: 'Smarter Farmers, Smarter Agriculture.',
    sort: 0,
    banner: {
      iconGroup: [
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
      ]
    }
    // services: {
    //   visible: true,
    //   services: [
    //     {
    //       img: '/images/services/crop-management-2.jpg',
    //       title: 'Integrated Crop Management',
    //       text: 'Maximize your yield and enhance your adaptibility amidst change in climate and socio-economic conditions by using SARAI’s integrated, farm-specific, crop support system.',
    //       link: ''
    //     },
    //     {
    //       img: '/images/services/pest-management-2.jpg',
    //       title: 'Integrated Pest Management',
    //       text: 'Identify pests and know how to manage them by dragging pest images on the platform.',
    //       link: ''
    //     },
    //     {
    //       img: '/images/services/water-management.jpg',
    //       title: 'Integrated Water Management',
    //       text: 'Monitor the moisture content of the soil in your area.',
    //       link: ''
    //     },
    //     {
    //       img: '/images/services/interactive-maps.jpg',
    //       title: 'Interactive Maps',
    //       text: 'Guide your farming decisions through the suitability, vulnerability, hazard, and crop production area maps produced by SARAI.',
    //       link: ''
    //     },
    //     {
    //       img: '/images/services/real-time-data.jpg',
    //       title: 'Real-Time Data',
    //       text: 'View real-time weather data from the Automatic Weather Stations installed throughout the country.',
    //       link: ''
    //     },
    //     {
    //       img: '/images/services/alerts-and-advisories.jpg',
    //       title: 'Alerts and Advisories',
    //       text: 'Receive crop alerts and advisories to help you increase your yield and your profit.',
    //       link: ''
    //     },
    //     {
    //       img: '/images/services/open-data.jpg',
    //       title: 'Open Data',
    //       text: 'Search through SARAI’s database to know more about SARAI’s experiments.',
    //       link: ''
    //     },
    //     {
    //       img: '/images/services/knowledge-hub.jpg',
    //       title: 'Knowledge Hub',
    //       text: 'Read write-ups, videos, and other materials to know more about SARAI’s six priority crops.',
    //       link: ''
    //     },
    //     {
    //       img: '/images/services/sarai-eskwela.jpg',
    //       title: 'SARAI Eskwela',
    //       text: 'Learn more about farming by accessing agricultural courses online for free.',
    //       link: ''
    //     }
    //   ]
    // }
  });
}
