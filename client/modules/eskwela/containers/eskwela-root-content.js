import React from 'react';

import EskwelaRootBanner from './eskwela-root-banner';
import EskwelaRootCourses from './eskwela-root-courses';

import EskwelaHeader from './../components/eskwela-header.jsx';

import {SectionList} from '/client/modules/ui-components';
// import {CoreRootTriSection} from '/client/modules/core';
import {useDeps, composeAll, compose} from 'mantra-core';


const composerLandingPage = ({}, onData) => {
  // const {Collections} = context();
  // const {LandingData} = Collections;

  const sections = [];
  const spacing = false;

  sections.push(React.createElement(EskwelaRootBanner, {
    banner: '/images/eskwela/eskwela_banner.jpg'
  }));

  sections.push(React.createElement(EskwelaHeader, {
    headerText: 'Courses'
  }));

  sections.push(React.createElement(EskwelaRootCourses, {
    courses: {
      visible: true,
      courses: [
        {
          img: '/images/eskwela/lessons/stages-of-corn-plant-development.jpg',
          title: 'Stage of Corn Development',
          text: 'Crop/Corn',
          link: ''
        },
        {
          img: '/images/eskwela/lessons/irrigation.jpg',
          title: 'Irrigation Farming Practices',
          text: 'Crop/Corn',
          link: ''
        },
        {
          img: '/images/eskwela/lessons/Banded-Leaf-and-Sheath-Blight.png',
          title: 'Disease Identification in Perennials',
          text: 'Crop/Corn',
          link: ''
        },
        {
          img: '/images/eskwela/lessons/Common-Cutworm.png',
          title: 'Identification of Common Pests',
          text: 'Crop/Corn',
          link: ''
        },

      ]
    }
  }));

  sections.push(React.createElement(EskwelaHeader, {
    headerText: 'Featured Content'
  }));


  sections.push(React.createElement(EskwelaRootCourses, {
    courses: {
      visible: true,
      courses: [
        {
          img: '/images/eskwela/tna_screenshot.png',
          title: 'Training Needs Analysis',
          text: 'A compilation of survey answers from 1,208 farmers and 50 partners about their training needs.',
          link: '/eskwela/tna'
        },
        {
          img: '/images/eskwela/el_nino_screenshot.png',
          title: 'El Nino Facts',
          text: 'Ano ang dapat gawin sa panahon ng El Nino?',
          link: ''
        }
      ]
    }
  }));

  onData(null, {sections, spacing});
};

export default composeAll(
  compose(composerLandingPage),
  useDeps()
)(SectionList);
