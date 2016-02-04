import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Tracker} from 'meteor/tracker';
import {ValidatedMethod as Method} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {mount} from 'react-mounter';

export function initContext() {
  return {
    Meteor,
    mount,
    FlowRouter,
    Collections,
    Tracker,
    Method,
    SimpleSchema
  };
}
