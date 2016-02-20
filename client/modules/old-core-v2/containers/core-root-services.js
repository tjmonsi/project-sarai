import React from 'react';
import { TriSection, SectionCard, BannerTitleEditor } from '/client/modules/old-ui-components-v2';
import {composeAll, useDeps, composeWithTracker} from 'mantra-core';
import lib from './../lib';
import {mediaLibMethod} from './core-media-lib';
import slug from 'slug';

const composeLandingData = ({context, actions}, onData) => {
  const {Collections, Meteor, FlowRouter} = context();
  const {coreRoot} = actions();
  const {saveBanner} = coreRoot;
  const {LandingData} = Collections;
  const {coreAuthenticate} = lib;
  const edit = !!coreAuthenticate() && FlowRouter.getQueryParam('edit') === 'true';
  const paths = [
    'alerts-and-advisories.root',
    'crop-support-system.root',
    'interactive-maps.root',
    'knowledge-hub.root',
    'open-data.root',
    'pest-management.root',
    'real-time-data.root',
    'sarai-eskwela.root',
    'water-management.root'
  ];

  if (Meteor.subscribe('services', paths).ready()) {
    const services = LandingData.find({path: {$in: paths}}, {sort: {sort: 1}})
      .fetch();

    if (services && services.length > 0) {
      const sections = services.map((service) => {
        return () => (React.createElement(SectionCard, {
          displayName: 'SectionCard',
          data: Object.assign({}, service, {
            handleCallback: saveBanner,
            mediaLib: {
              authenticate: coreAuthenticate,
              prefix: '/core',
              publicFlag: true,
              mediaLibMethod
            }
          }),
          edit,
          editor: (data, id, ref) => (React.createElement(BannerTitleEditor,
            Object.assign({}, data, {
              displayName: 'BannerTitleEditor',
              id,
              ref
            })
          )),
          id: slug(`${service.path}-${service.title}`, {
            remove: /\./
          }),
          img: service.background,
          link: FlowRouter.path(service.path),
          text: service.text,
          title: service.title
        }));
      });

      onData(null, {sections});
    } else {
      onData(null);
    }
  } else {
    onData(null);
  }
};

export default composeAll(
  composeWithTracker(composeLandingData),
  useDeps()
)(TriSection);
