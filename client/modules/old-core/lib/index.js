import {Meteor} from 'meteor/meteor';

export const authenticate = (context, redirect) => {
  const {queryParams} = context;
  const {edit} = queryParams;
  if (edit && edit === 'true') {
    if (!Meteor.userId()) {
      redirect('/');
    }
  } 
};
