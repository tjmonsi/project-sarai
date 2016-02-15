import {Meteor} from 'meteor/meteor'
import {ValidatedMethod as Method} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {LandingData, Cms} from '/lib/collections';

Meteor.methods({
  'LandingData.update': (path, title, background, text) => {
     return LandingData.update({path}, {$set: {banner: {title, background, text}}});
  }
});