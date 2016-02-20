import React from 'react';
import { MediaLib } from '/client/modules/ui-components-v2';
import {composeAll, compose, useDeps} from 'mantra-core';

const composeMediaLibRedux = ({context}, onData) => {
  const {mediaLib} = context();
  onData(null, {media: []});
  return mediaLib.subscribe(() => {
    const {files, token} = mediaLib.getState();
    onData(null, {files, token});
  });
};

const composeMediaLibCallback = ({context, handleCallback, prefix, publicFlag,
  id, passMediaLib}, onData) => {
  const {Meteor} = context();
  const publicStorage = Meteor.settings.public.publicStorage;
  onData(null, {
    handleCallback,
    prefix,
    publicFlag,
    publicStorage,
    id,
    passMediaLib
  });
};

const depsMediaLib = (context, actions) => ({
  uploadFileHandle: actions.mediaLib.uploadFileHandle,
  getFileHandle: actions.mediaLib.getFileHandle,
  getFilesHandle: actions.mediaLib.getFilesHandle,
  refreshFilesHandle: actions.mediaLib.refreshFilesHandle,
  context: () => context
});

const CoreMediaLib = composeAll(
  compose(composeMediaLibRedux),
  compose(composeMediaLibCallback),
  useDeps(depsMediaLib)
)(MediaLib);

export default CoreMediaLib;

export const mediaLibMethod = (handleCallback, authenticate, prefix, publicFlag,
  id, passMediaLib) => {
  return React.createElement(CoreMediaLib, {
    handleCallback,
    authenticate,
    prefix,
    publicFlag,
    id,
    passMediaLib
  });
};
