import React from 'react';
import GovernmentFooter from './../components/government-footer.jsx';
import {SectionList, FooterSection, FooterLinks, FooterText} from '/client/modules/ui-components';
import {useDeps} from 'mantra-core';


const depsToSectionList = () => ({
  sections: [
    React.createElement(FooterSection, {
      sections: [
        React.createElement(FooterLinks, {
          title: 'Project SARAI',
          links: [
            {
              label: 'Project 1',
              link: ''
            },
            {
              label: 'Project 2',
              link: ''
            },
            {
              label: 'Project 3',
              link: ''
            },
            {
              label: 'Project 4',
              link: ''
            },
            {
              label: 'Project 5',
              link: ''
            }
          ]
        }),
        React.createElement(FooterLinks, {
          title: 'Site Map',
          links: [
            {
              label: 'Home',
              link: ''
            },
            {
              label: 'About SARAI',
              link: ''
            },
            {
              label: 'SARAI Maps',
              link: ''
            },
            {
              label: 'SARAI Services',
              link: ''
            }
          ]
        }),
        React.createElement(FooterLinks, {
          title: 'SARAI Partners',
          links: [
            {
              label: 'DOST',
              link: ''
            },
            {
              label: 'PCAARRD',
              link: ''
            },
            {
              label: 'UPLB',
              link: ''
            }
          ]
        }),
        React.createElement(FooterText, {
          title: 'Contact Us',
          text: 'Email Us: contact@sarai.ph\n\nTelephone: (049)536-6001 to 06 loc 334'
        })
      ]
    }),
    React.createElement(GovernmentFooter)
  ],
  spacing: false
});

export default useDeps(depsToSectionList)(SectionList);
