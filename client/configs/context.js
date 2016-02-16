import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Tracker} from 'meteor/tracker';
import {ValidatedMethod as Method} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {check} from 'meteor/check';
import {mount} from 'react-mounter';
import {createStore} from 'redux';
const mediaLibDefaultState = {
  files: [],
  token: null
};

const mediaLib = createStore((state = mediaLibDefaultState, action) => {
  switch (action.type) {
  case 'CLEAR':
    return mediaLibDefaultState;
  case 'ADD':
    return Object.assign({}, state, {
      files: [
        ...state.files,
        ...action.files
      ]
    });
  case 'SET_TOKEN':
    return Object.assign({}, state, {
      token: action.token
    });
  case 'REMOVE_TOKEN':
    return Object.assign({}, state, {
      token: null
    });
  default:
    return state;
  }
});

export function initContext() {
  return {
    Accounts,
    Meteor,
    mount,
    FlowRouter,
    Collections,
    Tracker,
    Method,
    SimpleSchema,
    check,
    mediaLib
  };
}
